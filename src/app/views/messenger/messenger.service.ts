import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Messages} from './messages.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://a798cdcc.ngrok.io/';

  getAllMessages() {
    return this.http.get<Messages[]>(this.baseurl + 'messages');
  }

  addMessages(message: object) {
    return this.http.post(this.baseurl + 'messages', message);
  }

  updateMessages(message: object) {
    // @ts-ignore
    return this.http.put(this.baseurl + 'messages' + '/' + message._id, message);
  }

  deleteMessages(message: object) {
    // @ts-ignore
    return this.http.delete(this.baseurl + 'messages' + '/' + message._id);
  }
}
