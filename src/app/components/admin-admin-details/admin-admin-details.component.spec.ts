import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminDetailsComponent } from './admin-admin-details.component';

describe('AdminAdminDetailsComponent', () => {
  let component: AdminAdminDetailsComponent;
  let fixture: ComponentFixture<AdminAdminDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
