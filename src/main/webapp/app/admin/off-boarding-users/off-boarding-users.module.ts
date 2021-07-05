import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule, NbInputModule,
  NbListModule,
  NbSelectModule, NbUserModule
} from '@nebular/theme';
import { offBoardingUsersRoute } from 'app/admin/off-boarding-users/off-boarding-users..route';
import { OffBoardingUsersComponent } from 'app/admin/off-boarding-users/list/off-boarding-users.component';
import { OffBoardingUsersDetailComponent } from 'app/admin/off-boarding-users/detail/off-boarding-users-detail.component';
import { OffBoardingUsersUpdateComponent } from 'app/admin/off-boarding-users/update/off-boarding-users-update.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(offBoardingUsersRoute), NbCardModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbButtonModule, NbListModule, NbUserModule, NbAccordionModule, NbInputModule],
  declarations: [
    OffBoardingUsersComponent,
    OffBoardingUsersDetailComponent,
    OffBoardingUsersUpdateComponent,
  ],
  entryComponents: [],
})
export class OffBoardingUsersModule {}
