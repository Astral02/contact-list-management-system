import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDialog } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { ContactlistService } from './services/contactlist.service';
import { LoginService } from './services/Login/login.service';
import { LogoutComponent } from './logout/logout.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AuthGuard } from './services/guards/auth.guard';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UserModule,
    RoutingModule,
    SharedModule
  ],
  providers: [ContactlistService, LoginService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
