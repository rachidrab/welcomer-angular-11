import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffBoardingUsersUpdateComponent } from './off-boarding-users-update.component';

describe('OffBoardingUsersUpdateComponent', () => {
  let component: OffBoardingUsersUpdateComponent;
  let fixture: ComponentFixture<OffBoardingUsersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffBoardingUsersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffBoardingUsersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
