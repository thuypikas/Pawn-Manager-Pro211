import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs/operators';
import {AuthenticationService} from '../_services/authentication.service';
import {LoginService} from '../_services/login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private service: LoginService,
    private toastr: ToastrService
  ) {
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const data = this.loginForm.value;
    console.log(data);
    this.service.userLogin(data).subscribe(res => {
      if (res) {
        this.toastr.success('Login thành công');
        this.router.navigate(['/default/dashboard']);
      } else {
        this.toastr.error('username hoặc passwork không đúng');
      }
    });
  }
}
