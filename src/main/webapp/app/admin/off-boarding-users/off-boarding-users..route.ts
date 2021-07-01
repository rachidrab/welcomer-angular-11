import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser, User } from 'app/admin/user-management/user-management.model';
import { UserManagementService } from 'app/admin/user-management/service/user-management.service';
import { OffBoardingUsersComponent } from 'app/admin/off-boarding-users/list/off-boarding-users.component';
import { OffBoardingUsersDetailComponent } from 'app/admin/off-boarding-users/detail/off-boarding-users-detail.component';
import { OffBoardingUsersUpdateComponent } from 'app/admin/off-boarding-users/update/off-boarding-users-update.component';

@Injectable({ providedIn: 'root' })
export class OffBoardingUsersResolve implements Resolve<IUser> {
  constructor(private service: UserManagementService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const id = route.params['login'];
    if (id) {
      return this.service.find(id);
    }
    return of(new User());
  }
}

export const offBoardingUsersRoute: Routes = [
  {
    path: '',
    component: OffBoardingUsersComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':login/view',
    component: OffBoardingUsersDetailComponent,
    resolve: {
      user: OffBoardingUsersResolve,
    },
  },
  {
    path: 'new',
    component: OffBoardingUsersUpdateComponent,
    resolve: {
      user: OffBoardingUsersResolve,
    },
  },
  {
    path: ':login/edit',
    component: OffBoardingUsersUpdateComponent,
    resolve: {
      user: OffBoardingUsersResolve,
    },
  },
];
