import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ProductService} from '../product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  formProduct: FormGroup;
  type: any;
  data: any;
  buttonClicked: any;
  action: any = 'Thêm';
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
    if (this.data != null) {
      this.formProduct.patchValue({
        ...this.data,
      });
    }
  }
  buildForm() {
    this.formProduct = this.fb.group({
      _id: 0,
      name: ['', Validators.required],
      category_name: ['', Validators.required],
      status: [null, Validators.required],
      desc: [''],
      // images: [''],
      createdAt: new Date(),
      updatedAt: Date,
    });
  }
  submit() {
    if (this.formProduct.invalid) {
      return;
    }
    const params: any =  this.formProduct.value;
    if (this.type == 'add') {
      params._id = null;
    }
    if (this.type == 'add') {
      this.service.addProduct(params).subscribe(res => {
        this.toastr.success('Thêm thành công!');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else if (this.type == 'edit') {
      this.service.updateProduct(params).subscribe(res => {
        this.toastr.success('Sửa thành công!');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else {
      this.service.deleteProduct(params).subscribe(res => {
        this.toastr.success('Xóa thành công!');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }

}
