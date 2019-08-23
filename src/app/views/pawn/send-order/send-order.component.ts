import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {MessengerService} from '../../messenger/messenger.service';
import {CustomerService} from '../../customer/customer.service';
import {StaffService} from '../../staff/staff.service';
import {PawnService} from '../pawn.service';

@Component({
  selector: 'send-order',
  templateUrl: './send-order.component.html',
  styleUrls: ['./send-order.component.css']
})
export class SendOrderComponent implements OnInit {
  formMess: FormGroup;
  type: any;
  data: any;
  action: any = 'Gửi';
  buttonClicked: any;
  selectCustomer: any;
  customer: any = [];
  selectStaff: any;
  staff: any = [];
  filtered: any;
  filterStaff: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public modalAdd: BsModalRef,
    private toastr: ToastrService,
    private serviceMess: MessengerService,
    private serviceCustomer: CustomerService,
    private serviceStaff: StaffService,
    private serviceOrder: PawnService
  ) { }

  ngOnInit() {
    this.buildForm();


    this.getListCustomer();
    this.getListStaff();
    this.listData();
    if (this.data != null) {
      this.formMess.patchValue({
        ...this.data,
        customer_id: this.data.customer_id,
        staff_id: this.data.staff_id,
        context: this.data.context
      });
      this.selectCustomer = this.data.customer_id;
      this.selectStaff = this.data.staff_id;
    }
  }
  buildForm() {
    this.formMess = this.fb.group({
      customerName: ['', Validators.required],
      customer_id: [''],
      staffName: ['', Validators.required],
      staff_id: ['', Validators.required],
      customer_phone: [''],
      context: ['', Validators.required],
      staff_phone: ['']
    });

  }
  getListCustomer() {
    this.serviceCustomer.getAllCustomer().subscribe(customer => {
      this.customer = customer;
    });
  }


  getListStaff() {
    this.serviceStaff.getAllStaff().subscribe(res => {
      this.staff = res;
    });
  }


  findCustomerPhoneById(customer_id) {
    const res = this.customer.find((e) => {
      return customer_id = e._id;
    });
    return res ? res.phone : null;
  }
  findCustomerNameById(customer_id) {
    const res = this.customer.find((e) => {
      return customer_id = e._id;
    });
    return res ? res.fullName : null;
  }

  findStaffPhoneById(id) {
    const res = this.staff.find((e) => {
      return id = e._id;
    });
    return res ? res.phone : null;
  }
  findStaffNameById(id) {
    const res = this.staff.find((e) => {
      return id = e._id;
    });
    return res ? res.fullName : null;
  }
  listData() {
    const data: any = this.formMess.value;
    if (this.type == 'send') {
      this.serviceOrder.updateOrder(data).subscribe(res => {
        console.log('rr', res);
      });
    }
  }
  sendMessage() {
    this.formMess.get('customer_phone').setValue(this.findCustomerPhoneById(this.formMess.get('customer_id')));
    this.formMess.get('staff_phone').setValue(this.findStaffPhoneById(this.formMess.get('staff_id')));
    this.formMess.get('customer_id').setValue(this.findCustomerNameById(this.formMess.get('customer_id')));
    this.formMess.get('staff_id').setValue(this.findStaffNameById(this.formMess.get('staff_id')));
    const data: any = this.formMess.value;
      this.serviceMess.addMessages(data).subscribe(res => {
        this.toastr.success('Cảnh bảo đóng tiền thành công');
        this.modalAdd.hide();
        console.log('rr', res);
      });
  }
}
