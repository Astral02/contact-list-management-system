import { Injectable } from '@angular/core';
import { ContactList } from '../../contact';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  contactDetails: ContactList;
  constructor(private http: HttpClient) { }

editDetails(contact: ContactList) {
  return this.http.put<ContactList>('http://localhost:9001/editcontact', contact);
}

deleteDetails(userName: string) {
  return this.http.put<ContactList>('http://localhost:9001/deleteContactDetails/' + userName, '' );
 }

  getDetails(userName: string) {
   return this.http.get<ContactList>('http://localhost:9001/getContactDetails/' + userName);
  }
}
