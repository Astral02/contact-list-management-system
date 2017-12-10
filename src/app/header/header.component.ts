import { Component } from '@angular/core';
import { LoginService } from '../services/Login/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    constructor(private loginService: LoginService) { }
}