import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffBoardingUsersDetailComponent } from './off-boarding-users-detail.component';

describe('OffBoardingUsersDetailComponent', () => {
  let component: OffBoardingUsersDetailComponent;
  let fixture: ComponentFixture<OffBoardingUsersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffBoardingUsersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffBoardingUsersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
