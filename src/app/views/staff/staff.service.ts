import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Staff} from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) {
  }

  baseurl = 'https://a798cdcc.ngrok.io/';

  getAllStaff() {
    return this.http.get<Staff[]>(this.baseurl + 'staffs');
  }

  addStaff(staffs: object) {
    return this.http.post(this.baseurl + 'staffs', staffs);
  }

  updateStaff(staffs: object) {
    // @ts-ignore
    return this.http.put(this.baseurl + 'staffs' + '/' + staffs._id, staffs);
  }

  deleteStaff(staffs: object) {
    // @ts-ignore
    return this.http.delete(this.baseurl + 'staffs' + '/' + staffs._id);
  }
}
