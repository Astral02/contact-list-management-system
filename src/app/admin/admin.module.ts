import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewcontactlistComponent } from './viewcontactlist/viewcontactlist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule, MatDialog } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../services/guards/auth.guard';


@NgModule({
  declarations: [
    ViewcontactlistComponent,
    EditcontactComponent,
    DeletecontactComponent,
    CreatecontactComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // RoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forChild([
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { Role: 'Admin' } },
      { path: 'viewcontactlist:id/edit', component: EditcontactComponent, canActivate: [AuthGuard], data: { Role: 'Admin' } },
      { path: 'createcontact', component: CreatecontactComponent, canActivate: [AuthGuard], data: { Role: 'Admin' } },
      { path: 'deletecontact', component: DeletecontactComponent, canActivate: [AuthGuard], data: { Role: 'Admin' } },
      { path: 'viewcontactlist', component: ViewcontactlistComponent, canActivate: [AuthGuard], data: { Role: 'Admin' } }
    ])
  ],

})
export class AdminModule { }
