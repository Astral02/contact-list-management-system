import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/Login/login.service';
import { Router } from '@angular/router';
// import { MatDialogRef, MatDialog } from '@angular/material';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';



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
//   logout() {
//    this.loginService.isLoggedIn = false;
//    this.loginService.isAdmin = false;
//  //this.dialogRef.close();
//    this.router.navigate(['\login']);
//   }
//   cancelLogout() {
//     this.dialogRef.close();
//   }
}
