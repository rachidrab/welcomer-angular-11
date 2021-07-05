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
import { expatriationUsersRoute } from 'app/admin/expatriation-users/expatriation-users..route';
import { ExpatriationUsersComponent } from 'app/admin/expatriation-users/list/expatriation-users.component';
import { ExpatriationUsersDetailComponent } from 'app/admin/expatriation-users/detail/expatriation-users-detail.component';
import { ExpatriationUsersUpdateComponent } from 'app/admin/expatriation-users/update/expatriation-users-update.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(expatriationUsersRoute), NbCardModule, NbCheckboxModule, NbSelectModule, NbIconModule, NbButtonModule, NbListModule, NbUserModule, NbAccordionModule, NbInputModule],
  declarations: [
    ExpatriationUsersComponent,
    ExpatriationUsersDetailComponent,
    ExpatriationUsersUpdateComponent,
  ],
  entryComponents: [],
})
export class ExpatriationUsersModule {}
