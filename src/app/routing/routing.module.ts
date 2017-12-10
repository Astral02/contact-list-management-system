import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { AdminComponent } from '../admin/admin.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ViewcontactlistComponent } from '../admin/viewcontactlist/viewcontactlist.component';
import { EditcontactComponent } from '../admin/editcontact/editcontact.component';
import { DeletecontactComponent } from '../admin/deletecontact/deletecontact.component';
import { CreatecontactComponent } from '../admin/createcontact/createcontact.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthGuard } from '../services/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      // { path: 'viewcontactlist:id/edit', component: EditcontactComponent },
      // { path: 'createcontact', component: CreatecontactComponent },
      // { path: 'deletecontact', component: DeletecontactComponent },
      // { path: 'viewcontactlist', component: ViewcontactlistComponent },
      // { path: 'admin', component: AdminComponent },
      // { path: 'user', component: UserComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
