import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesDetailsComponent } from './admin-sales-details.component';

describe('AdminSalesDetailsComponent', () => {
  let component: AdminSalesDetailsComponent;
  let fixture: ComponentFixture<AdminSalesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSalesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
