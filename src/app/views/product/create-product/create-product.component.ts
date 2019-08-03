import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ProductService} from '../product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  formProduct: FormGroup;
  type: any;
  data: any;
  buttonClicked: any;
  action: any = 'Thêm';
  enabled: any;
  value: any;
  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private router: Router,
    public modalAdd: BsModalRef,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.type == 'edit') {
      this.action = 'Sửa';
    } else if (this.type == 'delete') {
      this.action = 'Xóa';
    }
  }
  buildForm() {
    this.formProduct = this.fb.group({});
  }
  submit() {}

  change() {

  }
}
