import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RevenueExpenditure } from './revenue-expenditure.model';

@Injectable({
  providedIn: 'root'
})
export class RevenueExpenditureService {

  constructor(private http: HttpClient) {
  }
  baseurl = 'https://c4ff6b3e.ngrok.io/';

  getAllRevenueExpenditure() {
    return this.http.get<RevenueExpenditure[]>(this.baseurl + 'revenue_expenditure');
  }
}

