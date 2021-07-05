import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpatriationUsersComponent } from './expatriation-users.component';

describe('ExpatriationUsersComponent', () => {
  let component: ExpatriationUsersComponent;
  let fixture: ComponentFixture<ExpatriationUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpatriationUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpatriationUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
