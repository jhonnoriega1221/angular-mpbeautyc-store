import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDetailsComponent } from './admin-product-details.component';

describe('AdminProductDetailsComponent', () => {
  let component: AdminProductDetailsComponent;
  let fixture: ComponentFixture<AdminProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
