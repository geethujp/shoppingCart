import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import  {AuthService}  from './../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {
  errors = {
    invalid: ''
  }
  constructor(private router: Router, public authService: AuthService) { }
  formSubmit(event, loginForm) {
    event.preventDefault();
    if ((loginForm.value.email != '' || loginForm.value.email != null) && (loginForm.value.password != '' || loginForm.value.password != null)) {
      //   this.afAuth.auth.signInWithEmailAndPassword(loginForm.value.username, loginForm.value.password)
      //     .then((userdata) => {
      //       this.router.navigate(['/dashboard']);
      //     })
      //     .catch((error) => {
      //       this.errors.invalid = 'Invalid username or password';
      //     });
      debugger
      // if(loginForm.value.username ==='geethu' && loginForm.value.password ==='qburst'){
      //   this.router.navigate(['/dashboard']);
      // }
      // else
      //   this.errors.invalid = 'Invalid username or password';
      this.authService.login(loginForm.value.email, loginForm.value.password);
    }

  }
}
