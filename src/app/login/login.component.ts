import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from '../_services/auth-guard.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  email: string = '';
  password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthGuardService,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.toastr.error('Login or password wrong', 'Warning!');
      return;
    }

    this.auth.userLoggedIn = true;
    this.router.navigate(['/']);
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
