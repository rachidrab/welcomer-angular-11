import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser, User } from 'app/admin/user-management/user-management.model';
import { UserManagementService } from 'app/admin/user-management/service/user-management.service';
import { ExpatriationUsersComponent } from 'app/admin/expatriation-users/list/expatriation-users.component';
import { ExpatriationUsersDetailComponent } from 'app/admin/expatriation-users/detail/expatriation-users-detail.component';
import { ExpatriationUsersUpdateComponent } from 'app/admin/expatriation-users/update/expatriation-users-update.component';

@Injectable({ providedIn: 'root' })
export class ExpatriationUsersResolve implements Resolve<IUser> {
  constructor(private service: UserManagementService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const id = route.params['login'];
    if (id) {
      return this.service.find(id);
    }
    return of(new User());
  }
}

export const expatriationUsersRoute: Routes = [
  {
    path: '',
    component: ExpatriationUsersComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':login/view',
    component: ExpatriationUsersDetailComponent,
    resolve: {
      user: ExpatriationUsersResolve,
    },
  },
  {
    path: 'new',
    component: ExpatriationUsersUpdateComponent,
    resolve: {
      user: ExpatriationUsersResolve,
    },
  },
  {
    path: ':login/edit',
    component: ExpatriationUsersUpdateComponent,
    resolve: {
      user: ExpatriationUsersResolve,
    },
  },
];
