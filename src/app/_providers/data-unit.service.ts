import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Unit } from '../_models/unit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUnitService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl + '/units');
  }
}
