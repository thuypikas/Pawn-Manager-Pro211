import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Messages} from './messages.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://d807e310.ngrok.io/';

  getAllMessages() {
    return this.http.get<Messages[]>(this.baseurl + 'messages');
  }

  addMessages(message: object) {
    return this.http.post(this.baseurl + 'messages', message);
  }
}
