import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';

import {
  GetUnits,
  GetUnitsSuccess,
  GetUnitById,
  GetUnitByIdSuccess
} from '../actions/units.actions';

import { DataUnitService } from '../../_providers/data-unit.service';
import * as fromReducers from '../reducers';
import { Filters } from '../../_models/filters.model';
import { Unit } from '../../_models/unit.model';

@Injectable()
export class UnitsEffects {
  @Effect()
  getUnits$ = this._action$.pipe(
    ofType(GetUnits.type),
    withLatestFrom(this.store.pipe(select(fromReducers.getFilters))),
    switchMap(([, filters]: [null, Filters]) =>
      this._DataUnitService.getUnits().pipe(
        map(
          (data) => {
            if (!!filters) {
              const result: Unit[] = data.filter((unit) => {
                return (
                  (filters.age ? unit.age === filters.age : true) &&
                  unit.cost &&
                  (filters.wood && unit.cost['Wood']
                    ? unit.cost['Wood'] < filters.wood
                    : true) &&
                  (filters.food && unit.cost['Food']
                    ? unit.cost['Food'] < filters.food
                    : true) &&
                  (filters.gold && unit.cost['Gold']
                    ? unit.cost['Gold'] < filters.gold
                    : true)
                );
              });

              return GetUnitsSuccess({ units: result });
            }
            return GetUnitsSuccess({ units: data });
          },
          catchError(() => EMPTY)
        )
      )
    )
  );

  @Effect()
  getUnitById$ = this._action$.pipe(
    ofType(GetUnitById.type),
    switchMap(({ id }) =>
      this._DataUnitService.getUnits().pipe(
        map(
          (data) => {
            const result = data.find((d) => d.id === id);
            return GetUnitByIdSuccess({ unit: result });
          },
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private _DataUnitService: DataUnitService,
    private _action$: Actions,
    public store: Store
  ) {}
}
