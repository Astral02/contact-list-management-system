import { Component, OnInit } from '@angular/core';
import { ContactList } from '../../contact';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-deletedetails',
  templateUrl: './deletedetails.component.html',
  styleUrls: ['./deletedetails.component.css'],
  providers: [UserService]
})
export class DeletedetailsComponent implements OnInit {
  userName: string;
  contact: ContactList = new ContactList();
  constructor(private userDetails: UserService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (data) => this.userName = data.get('id'));
    this.userDetails.getDetails(this.userName).subscribe(data => this.contact = data['result']);
    
    // this.userDetails.deleteDetails(this.contact).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.route.navigateByUrl('/viewdetails/' + this.userName);
    //   },
    //   (err) => console.log(err)
    // );
    this.userDetails.deleteDetails(this.userName).subscribe(
      (data) => {
        console.log(data);
        this.route.navigateByUrl('/viewdetails/' + this.userName);
      },
      (err) => console.log(err)
    );
  }
}
