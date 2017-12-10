import { Injectable } from '@angular/core';
import { ContactList } from '../contact';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactlistService {
  cl: ContactList[];
  constructor(private http: HttpClient) { }

  createContact(contact: ContactList) {
    return this.http.post<ContactList>('http://localhost:9001/createContact', contact);
  }

  editContact(contact: ContactList) {
    return this.http.put<ContactList>('http://localhost:9001/editcontact', contact);
  }

  deleteContact(userName: string) {
    return this.http.delete<string>('http://localhost:9001/deleteContact/' + userName);
  }

  getcontactlist() {
    return this.http.get<ContactList[]>('http://localhost:9001/getAllContactList');
  }
}
