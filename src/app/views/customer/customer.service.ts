import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://c4ff6b3e.ngrok.io/';

  getAllCustomer() {
    return this.http.get<Customer[]>(this.baseurl + 'customers');
  }

  getCustomerById(_id) {
    return this.http.get<Customer[]>(this.baseurl + 'customers' + '/' + _id);
  }

  addCustomer(customer: object) {
    return this.http.post(this.baseurl + 'customers', customer);
  }

  updateCustomer(customer: object) {
    // @ts-ignore
    return this.http.put(this.baseurl + 'customers' + '/' + customer._id, customer);
  }

  deleteCustomer(customer: object) {
    // @ts-ignore
    return this.http.delete(this.baseurl + 'customers' + '/' + customer._id);
  }
}
