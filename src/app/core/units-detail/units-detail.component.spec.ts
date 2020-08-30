import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { DataUnitService } from 'src/app/_providers/data-unit.service';
import { UnitsDetailComponent } from './units-detail.component';

describe('UnitsDetailComponent', () => {
  let component: UnitsDetailComponent;
  let fixture: ComponentFixture<UnitsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({})
      ],
      declarations: [UnitsDetailComponent],
      providers: [DataUnitService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
