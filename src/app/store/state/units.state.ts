import { Unit } from '../../_models/unit.model';
import { Filters } from '../../_models/filters.model';

export class UnitsState {
  units: Unit[];
  selectedUnit: Unit;
  filters: Filters;
}

export const initialUnitsState: UnitsState = {
  units: [],
  selectedUnit: null,
  filters: null
};
