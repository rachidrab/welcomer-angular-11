import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser, User } from 'app/admin/user-management/user-management.model';
import { UserManagementService } from 'app/admin/user-management/service/user-management.service';
import { OnBoardingUsersComponent } from 'app/admin/on-boarding-users/list/on-boarding-users.component';
import { OnBoardingUsersDetailComponent } from 'app/admin/on-boarding-users/detail/on-boarding-users-detail.component';
import { OnBoardingUsersUpdateComponent } from 'app/admin/on-boarding-users/update/on-boarding-users-update.component';

@Injectable({ providedIn: 'root' })
export class OnBoardingUsersResolve implements Resolve<IUser> {
  constructor(private service: UserManagementService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const id = route.params['login'];
    if (id) {
      return this.service.find(id);
    }
    return of(new User());
  }
}

export const onBoardingUsersRoute: Routes = [
  {
    path: '',
    component: OnBoardingUsersComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':login/view',
    component: OnBoardingUsersDetailComponent,
    resolve: {
      user: OnBoardingUsersResolve,
    },
  },
  {
    path: 'new',
    component: OnBoardingUsersUpdateComponent,
    resolve: {
      user: OnBoardingUsersResolve,
    },
  },
  {
    path: ':login/edit',
    component: OnBoardingUsersUpdateComponent,
    resolve: {
      user: OnBoardingUsersResolve,
    },
  },
];
