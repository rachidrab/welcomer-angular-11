import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: 'user-management',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
        data: {
          pageTitle: 'Users',
        },
      },
      {
        path: 'on-boarding-users',
        loadChildren: () => import('./on-boarding-users/on-boarding-users.module').then(m => m.OnBoardingUsersModule),
        data: {
          pageTitle: 'OnBoarding Users',
        },
      },
      {
        path: 'off-boarding-users',
        loadChildren: () => import('./off-boarding-users/off-boarding-users.module').then(m => m.OffBoardingUsersModule),
        data: {
          pageTitle: 'OffBoarding Users',
        },
      },
      {
        path: 'expatriation-users',
        loadChildren: () => import('./expatriation-users/expatriation-users.module').then(m => m.ExpatriationUsersModule),
        data: {
          pageTitle: 'Expatriation Users',
        },
      },
      {
        path: 'docs',
        loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
      },
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule),
      },
      {
        path: 'health',
        loadChildren: () => import('./health/health.module').then(m => m.HealthModule),
      },
      {
        path: 'logs',
        loadChildren: () => import('./logs/logs.module').then(m => m.LogsModule),
      },
      {
        path: 'metrics',
        loadChildren: () => import('./metrics/metrics.module').then(m => m.MetricsModule),
      },
      /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
    ]),
  ],
})
export class AdminRoutingModule {}
