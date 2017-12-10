import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.isLoggedIn = false;
    this.loginService.isAdmin = false;
    this.router.navigateByUrl('/login');
  }
}
