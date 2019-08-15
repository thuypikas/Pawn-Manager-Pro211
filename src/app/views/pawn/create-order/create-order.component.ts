import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {CustomerService} from '../../customer/customer.service';

@Component({
  selector: 'create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  formOrder: FormGroup;
  type: any;
  data: any;
  buttonClicked: any;
  action: any = 'Thêm';
  customer: any = [];
  selected: any;
  filtered: any;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public modalAdd: BsModalRef,
    private toastr: ToastrService,
    private serviceCustomer: CustomerService
  ) {
  }

  ngOnInit() {
    this.buildForm();
    if (this.type == 'edit') {
      this.action = 'Sửa';
    } else if (this.type == 'delete') {
      this.action = 'Xóa';
    }
    this.getListCustomer();
  }

  buildForm() {
    this.formOrder = this.fb.group({
      customerName: ['', Validators.required]
    });
  }

  getListCustomer() {
    this.serviceCustomer.getAllCustomer().subscribe(res => {
      this.customer = res;
      console.log(this.customer);
    });
  }

  onOptionsSelected() {
    this.filtered = this.customer.filter(t => t.value == this.selected);
    console.log(this.selected);

  }

  submit() {
    if (this.formOrder.invalid) {
      return;
    }
  }

}
