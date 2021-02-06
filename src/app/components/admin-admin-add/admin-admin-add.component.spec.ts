import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminAddComponent } from './admin-admin-add.component';

describe('AdminAdminAddComponent', () => {
  let component: AdminAdminAddComponent;
  let fixture: ComponentFixture<AdminAdminAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
