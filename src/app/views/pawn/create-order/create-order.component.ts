import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {CustomerService} from '../../customer/customer.service';
import {ProductService} from '../../product/product.service';
import {StaffService} from '../../staff/staff.service';
import {PawnService} from '../pawn.service';

@Component({
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, OnDestroy {
  formOrder: FormGroup;
  type: any;
  data: any;
  buttonClicked: any;
  action: any = 'Thêm';
  customer: any = [];
  selected: any;
  filtered: any;
  product: any = [];
  selectedProduct: any;
  filterProduct: any;
  selectedStaff: any;
  staff: any = [];
  filterStaff: any;
  interest_vi = '';
  interest_format = '';
  total_loan_vi = '';
  total_loan_format = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public modalAdd: BsModalRef,
    private toastr: ToastrService,
    private serviceCustomer: CustomerService,
    private serviceProduct: ProductService,
    private serviceStaff: StaffService,
    private serviceOrder: PawnService,
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.getListCustomer();
    this.getListProduct();
    this.getListStaff();
    if (this.type == 'edit') {
      this.action = 'Sửa';
    } else if (this.type == 'delete') {
      this.action = 'Xóa';
    }
    console.log('t', this.data);
    if (this.data != null) {
      this.formOrder.patchValue({
        ...this.data,
        interest_format : this.data.interest_format,
        interest_vi: this.data.interest_vi,
        total_loan_format: this.data.total_loan_format,
        total_loan_vi: this.data.total_loan_vi,
        month: this.data.month,
        interest_rate: this.data.interest_rate,
        customer_id: this.data.customer_id
      });
    }
  }

  buildForm() {
    this.formOrder = this.fb.group({
      _id: [0],
      customer_id: [null],
      product_id: [null],
      staff_id: [null],
      created_date: [(new Date()).getFullYear(), Validators.required],
      loan: [null, Validators.required],
      interest: [null, Validators.required],
      interest_rate: ['', Validators.required],
      month: [null, Validators.required],
      total_loan: [0],
      status: 0,
      interest_format: [''],
      interest_vi: [''],
      total_loan_format: [''],
      total_loan_vi: ['']
    });
  }

  getListCustomer() {
    this.serviceCustomer.getAllCustomer().subscribe(customer => {
      this.customer = customer;
    });
  }

  onOptionsSelected() {
    this.filtered = this.customer.filter(t => t.value == this.selected);
  }

  getListProduct() {
    this.serviceProduct.getAllProduct().subscribe(product => {
      this.product = product;
    });
  }

  onOptions() {
    this.filterProduct = this.product.filter(t => t.value == this.selectedProduct);
  }

  getListStaff() {
    this.serviceStaff.getAllStaff().subscribe(staff => {
      this.staff = staff;
    });
  }

  onOptionsStaff() {
    this.filterStaff = this.staff.filter(t => t.value == this.selectedStaff);
  }

  submit() {
    if (this.formOrder.invalid) {
      return;
    }
    const formData = this.formOrder.value;
    let data = {
      _id: formData._id,
      customer_id: formData.customer_id,
      product_id: formData.product_id,
      staff_id: formData.staff_id,
      created_date: formData.created_date,
      loan: formData.loan,
      interest: formData.interest,
      interest_rate: formData.interest_rate,
      month: formData.month,
      total_loan: formData.total_loan,
      status: formData.status,
      interest_format: formData.interest_format,
      interest_vi: formData.interest_vi,
      total_loan_format: formData.total_loan_format,
      total_loan_vi: formData.total_loan_vi
    }
    if (this.type == 'add') {
      console.log('d', this.type);
      this.serviceOrder.addOrder(data).subscribe(add => {
        console.log(add);
        this.toastr.success('Thêm thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else if (this.type == 'edit') {
      this.serviceOrder.updateOrder(data).subscribe(edit => {
        this.toastr.success('Sửa thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else {
      this.serviceOrder.deleteOrder(data).subscribe(deleted => {
        this.toastr.success('Xóa thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }

  ngOnDestroy(): void {
  }

  onCalculator() {
    const formValue = this.formOrder.value;
    formValue.interest = (formValue.loan * formValue.interest_rate * formValue.month * 30) / 1000000;
    formValue.total_loan = formValue.interest + formValue.loan;
    this.interest_format = this.formatNumber(formValue.interest);
    this.interest_vi = this.convertNumberToVietnamese(formValue.interest);
    this.total_loan_format = this.formatNumber(formValue.total_loan);
    this.total_loan_vi = this.convertNumberToVietnamese(formValue.total_loan);
    this.formOrder.get('interest').setValue(formValue.interest);
    this.formOrder.get('total_loan').setValue(formValue.total_loan);
  }

  formatNumber(nStr, decSeperate = '.', groupSeperate = '.') {
    return (+nStr).toLocaleString('vi-VN');
  }

  // chuyen so thanh chu tieng viet
  convertNumberToVietnamese(number) {
    if (isNaN(number)) {
      return number;
    }
    const arr = [
      'Không',
      'Một',
      'Hai',
      'Ba',
      'Bốn',
      'Năm',
      'Sáu',
      'Bảy',
      'Tám',
      'Chín'
    ];
    if (number === 0) {
      return arr[0];
    }
    let n = '';
    let a = '';
    do {
      const ty = number % 1e9;
      number = Math.floor(number / 1e9);
      n =
        number > 0
          ? this.third(ty, !0, arr) + a + n
          : this.third(ty, !1, arr) + a + n;
      a = ' Tỷ';
    } while (number > 0);
    return n.trim();
  }

  third(t, r, arr) {
    let o = '';
    const a = Math.floor(t / 1e6);
    t = t % 1e6;
    if (a > 0) {
      o = this.second(a, r, arr) + ' Triệu';
      r = !0;
    }
    const e = Math.floor(t / 1e3);
    t = t % 1e3;
    return (
      e > 0 && ((o += this.second(e, r, arr) + ' Ngàn'), (r = !0)),
      t > 0 && (o += this.second(t, r, arr)),
        o
    );
  }

  first(r, n, arr) {
    let o = '';
    const a = Math.floor(r / 10);
    const e = r % 10;
    return (
      a > 1
        ? ((o = ' ' + arr[a] + ' Mươi'), e === 1 && (o += ' Mốt'))
        : a === 1
        ? ((o = ' Mười'), e === 1 && (o += ' Một'))
        : n && e > 0 && (o = ' Lẻ'),
        e === 5 && a >= 1
          ? (o += ' Lăm')
          : e === 4 && a >= 1
          ? (o += ' Tư')
          : (e > 1 || (e === 1 && a === 0)) && (o += ' ' + arr[e]),
        o
    );
  }

  second(n, o, arr) {
    let a = '';
    const e = Math.floor(n / 100);
    n = n % 100;
    return (
      o || e > 0
        ? ((a = ' ' + arr[e] + ' Trăm'), (a += this.first(n, !0, arr)))
        : (a = this.first(n, !1, arr)),
        a
    );
  }

}
