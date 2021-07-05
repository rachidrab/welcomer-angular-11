import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingUsersUpdateComponent } from './on-boarding-users-update.component';

describe('OnBoardingUsersUpdateComponent', () => {
  let component: OnBoardingUsersUpdateComponent;
  let fixture: ComponentFixture<OnBoardingUsersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnBoardingUsersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingUsersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
