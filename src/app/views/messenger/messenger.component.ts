import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateMessengerComponent} from './create-messenger/create-messenger.component';
import {MessengerService} from './messenger.service';
import {CustomerService} from '../customer/customer.service';
import {StaffService} from '../staff/staff.service';

@Component({
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  bsModalRef: BsModalRef;
  dataTable: any = [];
  listCustomer: any = [];
  listStaff: any = [];

  constructor(
    private modalService: BsModalService,
    private service: MessengerService,
    private serviceCustomer: CustomerService,
    private serviceStaff: StaffService,
  ) {
  }

  ngOnInit() {
    this.getAllMess();
    this.getListStaff();
    this.getListCustomer();
  }

  actionMessenger(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateMessengerComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-md'
    });
  }

  getListStaff() {
    this.serviceStaff.getAllStaff().subscribe(res => {
      this.listStaff = res;
    });
  }

  getListCustomer() {
    this.serviceCustomer.getAllCustomer().subscribe(res => {
      this.listCustomer = res;
    });
  }

  findCustomerNameById(customer_id) {
    const res = this.listCustomer.find((e) => {
      return customer_id = e._id;
    });
    return res ? res.fullname : null;
  }

  findStaffNameById(id) {
    const res = this.listStaff.find((e) => {
      return id = e._id;
    });
    return res ? res.fullname : null;
  }

  getAllMess() {
    this.service.getAllMessages().subscribe(res => {
      this.dataTable = res;
    });
  }

  modalButtonClicked(data) {
    if (data) {
      this.getAllMess();
    }
  }

}
