import { Component, OnInit, Inject } from '@angular/core';
import { ContactList } from '../../contact';
import { ContactlistService } from '../../services/contactlist.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  contact: ContactList = new ContactList();
  constructor(public dialogRef: MatDialogRef<EditcontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private contactListService: ContactlistService) { }
  ngOnInit() {
    this.contact = this.data;
  }
  cancelUpdate() {
    this.dialogRef.close();
  }

  updateContact() {
    this.dialogRef.close();
    this.contactListService.editContact(this.contact).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
