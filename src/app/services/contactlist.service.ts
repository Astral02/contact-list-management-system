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

//{params: {'id': userName}}

deleteContact(userName: string) {
 return this.http.delete<string>('http://localhost:9001/deleteContact/' + userName );
}

  getcontactlist() {
   return this.http.get<ContactList[]>('http://localhost:9001/getAllContactList');
    // return this.cl = [
    //   {
    //     UserName: 'VG', Password: 'test', FirstName: 'Vikas', LastName: 'Garg', Gender: 'Male',
    //     Mobile: 123456789, Address: 'Doral, Miami', Role: 'Admin', Email: 'a@a.com'
    //   },
    //   {
    //     UserName: 'AS', Password: 'test1', FirstName: 'Anjali', LastName: 'Sharma', Gender: 'Female',
    //     Mobile: 987654321, Address: 'Doral, Miami', Role: 'User', Email: 'b@b.com'
    //   },
    //   {
    //     UserName: 'AG', Password: 'test1', FirstName: 'Avika', LastName: 'Garg', Gender: 'Female',
    //     Mobile: 11111111, Address: 'Doral, Miami', Role: 'User', Email: 'c@c.com'
    //   },
    //   {
    //     UserName: 'ViG', Password: 'test1', FirstName: 'Vishal', LastName: 'Garg', Gender: 'Male',
    //     Mobile: 987654321, Address: 'Doral, Miami', Role: 'User', Email: 'd@d.com'
    //   },
    // ];
  }
}
