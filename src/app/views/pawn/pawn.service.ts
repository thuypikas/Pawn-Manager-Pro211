import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from './pawn.model';

@Injectable({
  providedIn: 'root'
})
export class PawnService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://9fcc9d94.ngrok.io/';

  getAllOrder() {
    return this.http.get<Order[]>(this.baseurl + 'orders');
  }

  getOrderById(_id) {
    return this.http.get<Order[]>(this.baseurl + 'orders' + '/' + _id);
  }

  addOrder(order: object) {
    return this.http.post(this.baseurl + 'orders', order);
  }

  updateOrder(order: object) {
    // @ts-ignore
    return this.http.put(this.baseurl + 'orders' + '/' + order._id, order);
  }

  deleteOrder(order: object) {
    // @ts-ignore
    return this.http.delete(this.baseurl + 'orders' + '/' + order._id);
  }
}
