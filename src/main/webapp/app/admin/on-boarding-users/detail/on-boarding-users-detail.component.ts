import { Component, OnInit } from '@angular/core';
import { User } from 'app/admin/user-management/user-management.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-on-boarding-users-detail',
  templateUrl: './on-boarding-users-detail.component.html',
  styleUrls: ['./on-boarding-users-detail.component.scss']
})
export class OnBoardingUsersDetailComponent implements OnInit {

  user: User | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      this.user = user;
    });
  }

}
