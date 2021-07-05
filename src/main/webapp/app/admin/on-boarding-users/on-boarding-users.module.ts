import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbListModule,
  NbSelectModule, NbUserModule
} from '@nebular/theme';
import { onBoardingUsersRoute } from 'app/admin/on-boarding-users/on-borading-users.route';
import { OnBoardingUsersComponent } from 'app/admin/on-boarding-users/list/on-boarding-users.component';
import { OnBoardingUsersDetailComponent } from 'app/admin/on-boarding-users/detail/on-boarding-users-detail.component';
import { OnBoardingUsersUpdateComponent } from 'app/admin/on-boarding-users/update/on-boarding-users-update.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(onBoardingUsersRoute), NbCardModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbButtonModule, NbListModule, NbUserModule, NbAccordionModule],
  declarations: [
    OnBoardingUsersComponent,
    OnBoardingUsersDetailComponent,
    OnBoardingUsersUpdateComponent,
  ],
  entryComponents: [],
})
export class OnBoardingUsersModule {}
