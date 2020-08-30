import { Component, OnInit } from '@angular/core';
import { DataUnitService } from '../../_providers/data-unit.service';

import { Unit } from '../../_models/unit.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  GetUnits,
  SetAgeFilter,
  SetWoodFilter,
  SetGoldFilter,
  SetFoodFilter
} from '../../store/actions/units.actions';
import { selectUnits } from 'src/app/store/reducers';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  // input range values
  minRange = 0;
  maxRange = 200;

  valueSelectedWood: number;
  valueSelectedFood: number;
  valueSelectedGold: number;

  dataAge: Observable<Unit[]>;
  btnList: Array<{ category: string }>;

  selected: { category: string };

  units$ = this.store.pipe(select(selectUnits));

  constructor(private dataUnitService: DataUnitService, public store: Store) {
    this.btnList = [
      { category: 'All' },
      { category: 'Dark' },
      { category: 'Feudal' },
      { category: 'Castle' },
      { category: 'Imperial' }
    ];
  }

  ngOnInit(): void {
    // init values
    this.valueSelectedWood = 0;
    this.valueSelectedFood = 0;
    this.valueSelectedGold = 0;

    this.store.dispatch(GetUnits());
  }

  // set age category
  setAgeFilter(item: { category: string }): void {
    this.selected = item;
    item.category === 'All'
      ? this.store.dispatch(SetAgeFilter(null))
      : this.store.dispatch(
          SetAgeFilter({
            age: item.category
          })
        );
    this.store.dispatch(GetUnits());
  }

  isActive(item: { category: string }): boolean {
    return this.selected === item;
  }

  rangeValueFilter(
    categoryValueWood: number,
    categoryValueFood: number,
    categoryValueGold: number,
    keyName: string
  ): void {
    switch (keyName) {
      case 'Wood':
        this.store.dispatch(
          SetWoodFilter({
            wood: categoryValueWood
          })
        );
        break;

      case 'Food':
        this.store.dispatch(
          SetFoodFilter({
            food: categoryValueFood
          })
        );
        break;

      case 'Gold':
        this.store.dispatch(
          SetGoldFilter({
            gold: categoryValueGold
          })
        );
        break;

      default:
        break;
    }
    this.store.dispatch(GetUnits());
  }
}
