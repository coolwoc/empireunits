/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { DataUnitService } from './data-unit.service';

describe('DataUnitService', () => {
  let dataUnitService: DataUnitService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataUnitService]
    });
    dataUnitService = TestBed.get(DataUnitService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(
    inject(
      [HttpTestingController, dataUnitService],
      (httpClient: HttpTestingController, dataUnitService: DataUnitService) => {
        const units = [
          {
            id: 1,
            name: 'Archer',
            description:
              'Quick and light. Weak at close range; excels at battle from distance',
            expansion: 'Age of Kings',
            age: 'Feudal',
            cost: {
              Wood: 25,
              Gold: 45
            },
            build_time: 35,
            reload_time: 2,
            attack_delay: 0.35,
            movement_rate: 0.96,
            line_of_sight: 6,
            hit_points: 4,
            range: 30,
            attack: 4,
            armor: '0/0',
            accuracy: '80%'
          },
          {
            id: 2,
            name: 'Crossbowman',
            description: 'Upgraded archer',
            expansion: 'Age of Kings',
            age: 'Castle',
            cost: {
              Wood: 25,
              Gold: 45
            },
            build_time: 27,
            reload_time: 2,
            attack_delay: 0.35,
            movement_rate: 0.96,
            line_of_sight: 7,
            hit_points: 35,
            range: 5,
            attack: 5,
            armor: '0/0',
            attack_bonus: ['+3 spearmen'],
            accuracy: '85%'
          },
          {
            id: 3,
            name: 'Arbalest',
            description: 'Upgraded crossbowman',
            expansion: 'Age of Kings',
            age: 'Imperial',
            cost: {
              Wood: 25,
              Gold: 45
            },
            build_time: 27,
            reload_time: 2,
            attack_delay: 0.35,
            movement_rate: 0.96,
            line_of_sight: 7,
            hit_points: 40,
            range: 5,
            attack: 6,
            armor: '0/0',
            attack_bonus: ['+3 spearmen'],
            accuracy: '90%'
          }
        ];

        dataUnitService.getUnits().subscribe((data) => {
          expect(data.length).toBe(3);
        });

        const req = httpMock.expectOne('http://localhost:3004/units');
        expect(req.request.method).toBe('GET');

        req.flush(units);
        httpMock.verify();
      }
    )
  ));
});
