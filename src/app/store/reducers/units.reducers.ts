import {
  GetUnitsSuccess,
  SetAgeFilter,
  SetWoodFilter,
  SetFoodFilter,
  SetGoldFilter,
  GetUnitById,
  GetUnitByIdSuccess
} from '../actions/units.actions';
import { initialUnitsState, UnitsState } from '../state/units.state';
import { Action, createReducer, on } from '@ngrx/store';

const unitsReducer = createReducer(
  initialUnitsState,

  on(GetUnitsSuccess, (state, { units }) => ({ ...state, units: units })),

  on(GetUnitByIdSuccess, (state, { unit }) => ({
    ...state,
    selectedUnit: unit
  })),

  on(SetAgeFilter, (state, { age }) => ({
    ...state,
    filters: { ...state.filters, age }
  })),

  on(SetWoodFilter, (state, { wood }) => ({
    ...state,
    filters: { ...state.filters, wood }
  })),

  on(SetFoodFilter, (state, { food }) => ({
    ...state,
    filters: { ...state.filters, food }
  })),

  on(SetGoldFilter, (state, { gold }) => ({
    ...state,
    filters: { ...state.filters, gold }
  }))
);

export function reducer(
  state: UnitsState | undefined,
  action: Action
): UnitsState {
  return unitsReducer(state, action);
}
