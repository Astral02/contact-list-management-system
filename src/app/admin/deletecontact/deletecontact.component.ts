import { Component, OnInit, Inject } from '@angular/core';
import { ContactList } from '../../contact';
import { ContactlistService } from '../../services/contactlist.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.css']
})
export class DeletecontactComponent implements OnInit {
  contact: ContactList = new ContactList();
  userName: string;
  constructor(public dialogRef: MatDialogRef<DeletecontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private contactListService: ContactlistService) { }

  ngOnInit() {
    this.userName = this.data;
  }

  cancelDelete() {
    this.dialogRef.close();
    console.log('inside cancel delete');
  }

  deleteContact() {
    console.log('inside edit');
    this.dialogRef.close();

    this.contactListService.deleteContact(this.userName).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
}
