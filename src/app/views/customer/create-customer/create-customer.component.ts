import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {BsModalRef} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  type: any;
  data: any;
  formCustomer: FormGroup;
  buttonClicked: any;
  action: any = 'Thêm';

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    private router: Router,
    public modalAdd: BsModalRef,
    private toastr: ToastrService
) {
  }

  ngOnInit() {
    this.buildForm();

    if (this.type == 'edit') {
      this.action = 'Sửa';
    } else if (this.type == 'delete') {
      this.action = 'Xóa';
    }
    if (this.data != null) {
      this.formCustomer.patchValue({
        ...this.data,
        gender: Boolean(this.data.gender)
      });
    }
  }

  buildForm() {
    this.formCustomer = this.fb.group({
      _id: [''],
      fullname: [''],
      identification: [''],
      address: [''],
      gender: [''],
      birthday: [''],
      avatar: [''],
      created_date: [''],
      created_address: [''],
      phone: [''],
      email: [''],
      permanent_address: [''],
      description: {},
      job: [''],
      salary: [''],
      company: [''],
      contact_people: [''],
      contact_phone: [''],
      father_name: [''],
      father_phone: [''],
      mother_name: [''],
      mother_phone: ['']
    });
  }

  submit() {
    if (this.formCustomer.invalid) {
      return;
    }
    // tslint:disable-next-line:prefer-const
    let params = this.formCustomer.value;
    const customer: object = {};
    customer['_id'] = this.formCustomer.value._id,
    customer['fullname'] = this.formCustomer.value.fullname,
    customer['identification'] = this.formCustomer.value.identification,
    customer['address'] = this.formCustomer.value.address,
    customer['gender'] = this.formCustomer.value.gender,
    customer['birthday'] = this.formCustomer.value.birthday,
    customer['avatar'] = this.formCustomer.value.avatar,
    customer['created_date'] = this.formCustomer.value.created_date,
    customer['created_address'] = this.formCustomer.value.created_address,
    customer['phone'] = this.formCustomer.value.phone,
    customer['email'] = this.formCustomer.value.email,
    customer['permanent_address'] = this.formCustomer.value.permanent_address,
    customer['description'] = {
        job: this.formCustomer.value.job,
        salary: this.formCustomer.value.salary,
        company: this.formCustomer.value.company,
        contact_people: this.formCustomer.value.contact_people,
        contact_phone: this.formCustomer.value.contact_phone,
        father_name: this.formCustomer.value.father_name,
        father_phone: this.formCustomer.value.father_phone,
        mother_name: this.formCustomer.value.mother_name,
        mother_phone: this.formCustomer.value.mother_phone,
    };
    if (this.type == 'add') {
      // @ts-ignore
      customer._id = null;
    }
    if (this.type == 'add') {
      this.service.addCustomer(customer).subscribe(data => {
        console.log(data);
        this.toastr.success( 'Thêm thành công!');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else if (this.type == 'edit') {
      this.service.updateCustomer(customer).subscribe(data => {
        this.toastr.success( 'Sửa thành công!');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else {
      // @ts-ignore
      this.service.deleteCustomer(customer).subscribe(data => {
        this.toastr.success('Xóa thành công!');
        console.log(data);
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }

}
