import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {MessengerService} from '../messenger.service';
import {CustomerService} from '../../customer/customer.service';
import {StaffService} from '../../staff/staff.service';

@Component({
  templateUrl: './create-messenger.component.html',
  styleUrls: ['./create-messenger.component.css']
})
export class CreateMessengerComponent implements OnInit {
  formMess: FormGroup;
  type: any;
  data: any;
  buttonClicked: any;
  action: any = 'Gửi';
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
    private serviceStaff: StaffService
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.getListCustomer();
    this.getListStaff();
    if (this.data != null) {
      this.formMess.patchValue({
        ...this.data,
      });
    }
  }

  buildForm() {
    this.formMess = this.fb.group({
      customer_id: ['', Validators.required],
      staff_id: ['', Validators.required],
      customer_phone: [''],
      context: ['', Validators.required],
      staff_phone: ['']
    });
  }

  getListCustomer() {
    this.serviceCustomer.getAllCustomer().subscribe(customer => {
      console.log(customer);
      this.customer = customer;
    });
  }

  onOptionsCustomer() {
    this.filtered = this.customer.find(t => t.value == this.selectCustomer);
    console.log(this.filtered);
  }

  getListStaff() {
    this.serviceStaff.getAllStaff().subscribe(res => {
      this.staff = res;
    });
  }

  onOptionsStaff() {
    this.filterStaff = this.staff.find(t => t.value == this.selectStaff);
  }

  findCustomerNameById(customer_id) {
    const res = this.customer.find((e) => {
      return customer_id = e._id;
    });
    return res ? res.phone : null;
  }

  findStaffNameById(id) {
    const res = this.staff.find((e) => {
      return id = e._id;
    });
    return res ? res.phone : null;
  }

  sendMessage() {
    this.formMess.get('customer_phone').setValue(this.findCustomerNameById(this.formMess.get('customer_id')));
    this.formMess.get('staff_phone').setValue(this.findStaffNameById(this.formMess.get('staff_id')));

    // if (this.formMess.invalid) {
    //   return;
    // }
    const data: any = this.formMess.value;
    if (this.type == 'add') {
      this.serviceMess.addMessages(data).subscribe(res => {
        console.log('f', res);
        this.toastr.success('Gửi thành công!');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }

}
