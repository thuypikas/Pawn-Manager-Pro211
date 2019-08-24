import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Messages} from './messages.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://c4ff6b3e.ngrok.io/';

  getAllMessages() {
    return this.http.get<Messages[]>(this.baseurl + 'messages');
  }

  addMessages(message: object) {
    return this.http.post(this.baseurl + 'messages', message);
  }
}
