import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login/login.service';
import { User } from '../services/Login/user';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  result: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.loginService.loginUser(this.user).subscribe(data => {
      if (data['status'] === 'success') {
        this.user = data['result'];
        if (this.user !== undefined && this.user !== null) {
          this.loginService.isLoggedIn = true;
          this.loginService.userName =  this.user.UserName;
          console.log('Logged in true');
          if (this.user.Role === 'Admin') {
            this.loginService.isAdmin = true;
            console.log('admin is logged in');
            this.router.navigate(['/viewcontactlist']);
          }
          else {
            this.loginService.isAdmin = false;
            this.router.navigate(['/viewdetails/' + this.loginService.userName]);
          }
        }
        else {
          this.result = 'Invalid credential! Please try again!!!';
          this.user = new User();
        }
      }
    });
  }
}
