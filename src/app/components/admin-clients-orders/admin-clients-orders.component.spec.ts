import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsOrdersComponent } from './admin-clients-orders.component';

describe('AdminClientsOrdersComponent', () => {
  let component: AdminClientsOrdersComponent;
  let fixture: ComponentFixture<AdminClientsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
