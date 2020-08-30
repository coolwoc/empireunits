import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../../_models/unit.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GetUnitById } from 'src/app/store/actions/units.actions';
import { selectUnitById } from 'src/app/store/reducers';

@Component({
  selector: 'app-units-detail',
  templateUrl: './units-detail.component.html',
  styleUrls: ['./units-detail.component.scss']
})
export class UnitsDetailComponent implements OnInit {
  dataAgeById: Observable<Unit[]>;
  unitId: number;

  selectedUnit$ = this.store.pipe(select(selectUnitById));

  constructor(private activatedRouter: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.unitId = +this.activatedRouter.snapshot.params.id;
    this.store.dispatch(GetUnitById({ id: this.unitId }));
  }
}
