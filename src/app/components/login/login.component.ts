import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {
  errors = {
    email: '',
    password: '',
    invalid: ''
  }
  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private router: Router, public authService: AuthService) { }
  clearErrors() {
    this.errors.email = '';
    this.errors.password = '';
    this.errors.invalid = '';
  }
  formSubmit(event, loginForm) {
    event.preventDefault();
    this.clearErrors();
    if (loginForm.value.email == '') {
      this.errors.email = 'Email is required';
    }
    else {
      if (!loginForm.value.email.match(this.pattern))
        this.errors.email = 'Invalid email';
    }


    if (loginForm.value.password == '')
      this.errors.password = 'Password is required';
    else {
      if (loginForm.value.password.length < 8)
        this.errors.password = 'Password should be minimum 8 characters.';
    }
    if ((loginForm.value.email != '' || loginForm.value.email != null) && (loginForm.value.password != '' || loginForm.value.password != null)) {
      this.authService.login(loginForm.value.email, loginForm.value.password);
    }
  }
}
