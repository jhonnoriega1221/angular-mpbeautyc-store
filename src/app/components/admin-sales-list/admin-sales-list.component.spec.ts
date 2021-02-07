import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalesListComponent } from './admin-sales-list.component';

describe('AdminSalesListComponent', () => {
  let component: AdminSalesListComponent;
  let fixture: ComponentFixture<AdminSalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
