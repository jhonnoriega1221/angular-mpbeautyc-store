import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsTabsComponent } from './admin-clients-tabs.component';

describe('AdminClientsTabsComponent', () => {
  let component: AdminClientsTabsComponent;
  let fixture: ComponentFixture<AdminClientsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
