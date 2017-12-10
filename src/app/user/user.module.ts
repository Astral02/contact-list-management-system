import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Shared Module
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule, MatDialog } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//End Shared module

import { UserComponent } from '../user/user.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { DeletedetailsComponent } from './deletedetails/deletedetails.component';
import { AuthGuard } from '../services/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { Role: 'User' } },
      { path: 'editdetails/:id', component: EditdetailsComponent, canActivate: [AuthGuard], data: { Role: 'User' } },
      { path: 'deletedetails/:id', component: DeletedetailsComponent, canActivate: [AuthGuard], data: { Role: 'User' } },
      { path: 'viewdetails/:id', component: ViewdetailsComponent, canActivate: [AuthGuard], data: { Role: 'User' } }
    ])
  ],
  declarations: [ ViewdetailsComponent, EditdetailsComponent, DeletedetailsComponent, UserComponent]
})
export class UserModule { }
