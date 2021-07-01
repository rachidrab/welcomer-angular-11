import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbButtonModule, ChartsModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
