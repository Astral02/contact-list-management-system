import { Component, OnInit } from '@angular/core';
import { ContactList } from '../../contact';
import { ContactlistService } from '../../services/contactlist.service';
import { MatDialog } from '@angular/material';
import { EditcontactComponent } from '../editcontact/editcontact.component';
import { DeletecontactComponent } from '../deletecontact/deletecontact.component';

@Component({
  selector: 'app-viewcontactlist',
  templateUrl: './viewcontactlist.component.html',
  styleUrls: ['./viewcontactlist.component.css'],
  viewProviders: [ContactlistService]
})
export class ViewcontactlistComponent implements OnInit {
  cl: ContactList[];
  dialogRef: any;
  constructor(private contactList: ContactlistService,
    private dialog: MatDialog) { }
  ngOnInit() {
    this.contactList.getcontactlist().subscribe(data => this.cl = data['result']);
  }

  editContact(editcontactlist: ContactList): void {
    this.dialogRef = this.dialog.open(EditcontactComponent, {
      data: editcontactlist,
      width: '750px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed after edit');
      console.log(result);
      this.contactList.getcontactlist().subscribe(udata => this.cl = udata['result']);
    });
  }

  deleteContact(userName: String): void {
    this.dialogRef = this.dialog.open(DeletecontactComponent, {
      data: userName,
      width: '250px'
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed after deleting');
      console.log(result);
      this.contactList.getcontactlist().subscribe(udata => this.cl = udata['result']);
    });
  }
}
