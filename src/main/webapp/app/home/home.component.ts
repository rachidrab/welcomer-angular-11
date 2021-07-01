import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/login/login.service';
import { HttpResponse } from '@angular/common/http';
import { IRequest } from 'app/entities/request/request.model';
import { RequestService } from 'app/entities/request/service/request.service';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  authenticationError = false;
  loginForm = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    rememberMe: [false]
  });
  requests?: IRequest[];
  chart = [];

  public usersBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    yAxis: {
      beginAtZero: true
    }
  };
  public usersBarChartLabels = ['Utilisateurs'];
  public usersBarChartLegend = true;
  public usersBarChartData = [
    {
      data: [11],
      backgroundColor: [
        'rgba(27,60,255,0.59)'
      ],
      label: 'Utilisateurs'
    }
  ];

  public requestBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    yAxis: {
      beginAtZero: true
    }
  };
  public requestBarChartLabels = ['Demandes'];
  public requestBarChartLegend = true;
  public requestBarChartData = [
    {
      data: [20],
      backgroundColor: [
        'rgba(27,60,255,0.59)'
      ],
      label: 'Demandes'
    }
  ];

  public barChartOptions = {
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    responsive: true,
    yAxis: {
      beginAtZero: true
    }
  };
  public barChartLabels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  public barChartLegend = true;
  public barChartData = [
    {
      data: [20, 13, 8, 12, 19, 4, 0, 0, 0, 0, 0, 0],
      label: 'Demandes'
    }
  ];
  public doughnutChartLabels = ['OffBoarding', 'OnBoarding', 'Expatriation'];
  public doughnutChartData: number[] = [4, 23, 12];
  public doughnutChartLabels1 = ['Demandes validées', 'Demandes non validées', 'Demandes validées et livrées', 'Demandes validées et non livrées'];
  public doughnutChartData1: number[] = [23, 2, 21, 2];
  constructor(private accountService: AccountService, private router: Router, private fb: FormBuilder, private loginService: LoginService, protected requestService: RequestService) {
  }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.requestService
      .query({})
      .subscribe(
        (res: HttpResponse<IRequest[]>) => {
          this.requests = res.body ?? [];
        }
      );
    if (this.requests !== undefined) {
      this.doughnutChartData.push(this.requests.length);
    }
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginService
      .login({
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value,
        rememberMe: this.loginForm.get('rememberMe')!.value
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          if (!this.router.getCurrentNavigation()) {
            // There were no routing during login (eg from navigationToStoredUrl)
            this.router.navigate(['']);
          }
        },
        () => (this.authenticationError = true)
      );
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
