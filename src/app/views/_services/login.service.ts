import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://b4027799.ngrok.io/';

  userLogin(user: Login) {
    return this.http.post(this.baseurl + 'login', user);
  }
}
