import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomerService} from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  dataTable: any[] = [];
  bsModalRef: BsModalRef;
  searchText;

  constructor(
    private modalService: BsModalService,
    private serviceCustomer: CustomerService
  ) {
  }

  ngOnInit() {
    this.getCustomerData();
  }

  actionCustomer(type, data: any = null) {
    this.bsModalRef = this.modalService.show(CreateCustomerComponent, {
      initialState: {
        type: type,
        data: data,
        buttonClicked: this.modalButtonClicked.bind(this)
      },
      class: 'modal-lg'
    });
  }

  getCustomerData() {
    this.serviceCustomer.getAllCustomer().subscribe(res => {
      console.log(res);
      this.dataTable = res;
    });
  }
  modalButtonClicked(data) {
    console.log(data);
    if (data) {
      this.getCustomerData();
    }
  }
}
