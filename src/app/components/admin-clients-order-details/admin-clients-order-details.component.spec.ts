import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsOrderDetailsComponent } from './admin-clients-order-details.component';

describe('AdminClientsOrderDetailsComponent', () => {
  let component: AdminClientsOrderDetailsComponent;
  let fixture: ComponentFixture<AdminClientsOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
