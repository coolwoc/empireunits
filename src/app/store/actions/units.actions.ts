import { createAction, props } from '@ngrx/store';
import { Unit } from '../../_models/unit.model';

export const GetUnits = createAction('[Units] Get Units');

export const GetUnitsSuccess = createAction(
  '[Units] Get Units Success',
  props<{ units: Unit[] }>()
);

export const GetUnitById = createAction(
  '[Units] Get Unit By Id',
  props<{ id: number }>()
);

export const GetUnitByIdSuccess = createAction(
  '[Units] Get Unit By Id Success',
  props<{ unit: Unit }>()
);

export const SetAgeFilter = createAction(
  '[Units] Set Age filter',
  props<{ age: string }>()
);

export const SetWoodFilter = createAction(
  '[Units] Set Wood filter',
  props<{ wood: number }>()
);

export const SetFoodFilter = createAction(
  '[Units] Set Food filter',
  props<{ food: number }>()
);

export const SetGoldFilter = createAction(
  '[Units] Set Gold filter',
  props<{ gold: number }>()
);
