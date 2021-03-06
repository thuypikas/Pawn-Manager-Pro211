import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post<any>(`/login`, { username: username, password: password })
      .pipe(map(user => {
        console.log(user);
        // if (user && user.token) {
        //   localStorage.setItem('currentUser', JSON.stringify(user));
        // }

        return user;
      }));
  }
}
