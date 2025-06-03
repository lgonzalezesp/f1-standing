// src/app/services/summary.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Summary} from '../model/summary.model';


@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private readonly JSON_PATH = 'assets/f1/2025/2025_races_summary.json';

  constructor(private http: HttpClient) {}

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(this.JSON_PATH);
  }
}
