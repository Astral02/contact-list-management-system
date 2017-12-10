import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatDialog } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
// import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { ViewcontactlistComponent } from './admin/viewcontactlist/viewcontactlist.component';
// import { EditcontactComponent } from './admin/editcontact/editcontact.component';
// import { DeletecontactComponent } from './admin/deletecontact/deletecontact.component';
// import { CreatecontactComponent } from './admin/createcontact/createcontact.component';

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


 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //UserComponent,
    // AdminComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    // ViewcontactlistComponent,
    // EditcontactComponent,
    // DeletecontactComponent,
    // CreatecontactComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AdminModule,
    UserModule,
    RoutingModule
  ],
  providers: [ContactlistService, LoginService, AuthGuard],
  bootstrap: [AppComponent],
  })
export class AppModule { }
