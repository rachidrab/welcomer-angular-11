import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpatriationUsersDetailComponent } from './expatriation-users-detail.component';

describe('ExpatriationUsersDetailComponent', () => {
  let component: ExpatriationUsersDetailComponent;
  let fixture: ComponentFixture<ExpatriationUsersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpatriationUsersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpatriationUsersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
