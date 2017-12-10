import { Component, OnInit } from '@angular/core';
import { ContactList } from '../../contact';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
  viewProviders: [UserService]
})
export class ViewdetailsComponent implements OnInit {
  contact: ContactList = new ContactList();

  userName: string;
  constructor(private userDetails: UserService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (data) => this.userName = data.get('id'));
    this.userDetails.getDetails(this.userName).subscribe(data => this.contact = data['result']);
  }
}
