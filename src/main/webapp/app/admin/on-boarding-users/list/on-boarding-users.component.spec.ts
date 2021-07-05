import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingUsersComponent } from './on-boarding-users.component';

describe('OnBoardingUsersComponent', () => {
  let component: OnBoardingUsersComponent;
  let fixture: ComponentFixture<OnBoardingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
