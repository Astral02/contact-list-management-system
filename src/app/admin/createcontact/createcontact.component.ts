import { Component, OnInit } from '@angular/core';
import { ContactList } from '../../contact';

import { ContactlistService } from '../../services/contactlist.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {
  contact: ContactList = new ContactList();
  result: string;
  isSuccess = false;
  constructor(private contactListService: ContactlistService) { }

  ngOnInit() {
  }

  createContact() {
    this.contactListService.createContact(this.contact).subscribe(
      (data) => {
        console.log(data);
        this.result = 'Contact added successfuly.';
        this.isSuccess = true;
      },
      (err) => {
        console.log(err);
        this.result = 'Opps!! Something is went wrong.';
        this.isSuccess = false;
      }
    );

    this.contact = new ContactList();
  }

}

