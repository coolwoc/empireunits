import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { DataUnitService } from '../../_providers/data-unit.service';

import { UnitsComponent } from './units.component';

describe('UnitsComponent', () => {
  let component: UnitsComponent;
  let fixture: ComponentFixture<UnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      declarations: [UnitsComponent],
      providers: [DataUnitService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('UnitsComponent categories return value', () => {
  let fixture: ComponentFixture<UnitsComponent>;
  let component: UnitsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      declarations: [UnitsComponent],
      providers: [DataUnitService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UnitsComponent);
        component = fixture.componentInstance;
      });
  }));

  it('verify methods return value', async(() => {
    spyOn(component, 'setAgeFilter');
    const link = fixture.debugElement.nativeElement.querySelector(
      '.list__item'
    );
    link.click();
    fixture.whenStable().then(() => {
      expect(link).toHaveBeenCalled();
    });
  }));
});

describe('UnitsComponent data-age.service', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot({})],
      declarations: [UnitsComponent],
      providers: [DataUnitService]
    })
  );
  it('should be created service', () => {
    const service: DataUnitService = TestBed.get(DataUnitService);
    expect(service).toBeTruthy();
  });
  it('shoud have data getUnits function', () => {
    const service: DataUnitService = TestBed.get(DataUnitService);
    expect(service.getUnits).toBeTruthy();
  });
});
