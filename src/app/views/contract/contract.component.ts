import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MessengerService} from '../messenger/messenger.service';
import {CustomerService} from '../customer/customer.service';
import {StaffService} from '../staff/staff.service';

@Component({
  templateUrl: './messenger.component.html',
})
export class ContractComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private service: MessengerService,
    private serviceCustomer: CustomerService,
    private serviceStaff: StaffService,
  ) {}

  ngOnInit(): void {
  }
}
