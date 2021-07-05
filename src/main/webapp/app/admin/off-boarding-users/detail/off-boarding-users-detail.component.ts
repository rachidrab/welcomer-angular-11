import { Component, OnInit } from '@angular/core';
import { User } from 'app/admin/user-management/user-management.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-off-boarding-users-detail',
  templateUrl: './off-boarding-users-detail.component.html',
  styleUrls: ['./off-boarding-users-detail.component.scss']
})
export class OffBoardingUsersDetailComponent implements OnInit {

  user: User | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      this.user = user;
    });
  }

}
