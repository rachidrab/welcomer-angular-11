import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpatriationUsersUpdateComponent } from './expatriation-users-update.component';

describe('ExpatriationUsersUpdateComponent', () => {
  let component: ExpatriationUsersUpdateComponent;
  let fixture: ComponentFixture<ExpatriationUsersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpatriationUsersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpatriationUsersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
