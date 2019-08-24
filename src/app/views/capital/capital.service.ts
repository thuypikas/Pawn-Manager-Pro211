import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capital } from './capital.model';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  constructor(private http: HttpClient) {

   }

  baseurl = 'https://c4ff6b3e.ngrok.io/';

  getAllCapital() {
    return this.http.get<Capital[]>(this.baseurl + 'capitals');
  } 
}

