import { InjectionToken } from '@angular/core';
import { ActionReducerMap, Action, createSelector } from '@ngrx/store';
import { UnitsState } from '../state/units.state';
import * as fromUnitsReducer from './units.reducers';

export interface ReducersState {
  unitsReducer: UnitsState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<ReducersState, Action>
>('Root reducers token', {
  factory: () => ({
    unitsReducer: fromUnitsReducer.reducer
  })
});

export const selectUnitsState: (state: ReducersState) => UnitsState = (
  state: ReducersState
) => state.unitsReducer;

export const selectUnits = createSelector(
  selectUnitsState,
  (state: UnitsState) => {
    return state.units;
  }
);

export const selectUnitById = createSelector(
  selectUnitsState,
  (state: UnitsState) => {
    return state.selectedUnit;
  }
);

export const getFilters = createSelector(
  selectUnitsState,
  (state: UnitsState) => state.filters
);
