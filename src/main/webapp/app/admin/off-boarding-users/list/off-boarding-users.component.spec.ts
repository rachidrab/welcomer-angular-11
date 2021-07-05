import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffBoardingUsersComponent } from './off-boarding-users.component';

describe('OffBoardingUsersComponent', () => {
  let component: OffBoardingUsersComponent;
  let fixture: ComponentFixture<OffBoardingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffBoardingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffBoardingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
