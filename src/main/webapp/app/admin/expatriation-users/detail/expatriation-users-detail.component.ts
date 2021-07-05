import { Component, OnInit } from '@angular/core';
import { User } from 'app/admin/user-management/user-management.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-expatriation-users-detail',
  templateUrl: './expatriation-users-detail.component.html',
  styleUrls: ['./expatriation-users-detail.component.scss']
})
export class ExpatriationUsersDetailComponent implements OnInit {

  user: User | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      this.user = user;
    });
  }

}
