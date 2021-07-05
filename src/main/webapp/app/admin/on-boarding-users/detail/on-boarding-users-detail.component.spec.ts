import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingUsersDetailComponent } from './on-boarding-users-detail.component';

describe('OnBoardingUsersDetailComponent', () => {
  let component: OnBoardingUsersDetailComponent;
  let fixture: ComponentFixture<OnBoardingUsersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingUsersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingUsersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
