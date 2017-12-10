import { Component, OnInit } from '@angular/core';
import { ContactList } from '../../contact';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css'],
  providers: [UserService]
})
export class EditdetailsComponent implements OnInit {
  userName: string;
  contact: ContactList = new ContactList();
  constructor(private userDetails: UserService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (data) => this.userName = data.get('id'));
    this.userDetails.getDetails(this.userName).subscribe(data => this.contact = data['result']);
  }

  updateDetails() {
    this.userDetails.editDetails(this.contact).subscribe(
      (data) => {
        console.log(data);
        this.route.navigateByUrl('/viewdetails/' + this.userName);
      },
      (err) => console.log(err)
    );
  }

}
