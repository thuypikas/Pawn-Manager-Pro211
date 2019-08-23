import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {StaffService} from '../staff.service';

@Component({
  selector: 'create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
  formStaff: FormGroup;
  type: any;
  data: any;
  buttonClicked: any;
  action: any = 'Thêm';

  constructor(
    private fb: FormBuilder,
    private service: StaffService,
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
      this.formStaff.patchValue({
        ...this.data,
        gender: Boolean(this.data.gender),
        role: Boolean(this.data.role)
      });
    }
  }
  buildForm() {
    this.formStaff = this.fb.group({
      _id: [''],
      username: ['', Validators.required],
      role: [false, Validators.required],
      fullname: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      identification: ['', Validators.required],
      address: ['', Validators.required],
      birthday: [Date()],
      created_date: [Date()],
      avatar: [''],
      created_address: [''],
      phone: [''],
      email: [''],
      permanent_address: ['']
    });
  }

  submit() {
    if (this.formStaff.invalid) {
      return;
    }
    const params: any = this.formStaff.value;
    if (this.type == 'add') {
      this.service.addStaff(params).subscribe(res => {
        this.toastr.success('Thêm thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else if (this.type == 'edit') {
      this.service.updateStaff(params).subscribe(res => {
        this.toastr.success('Sửa thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    } else {
      this.service.deleteStaff(params).subscribe(res => {
        this.toastr.success('Xóa thành công');
        this.buttonClicked(true);
        this.modalAdd.hide();
      });
    }
  }

}
