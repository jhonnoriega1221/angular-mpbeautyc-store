import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsQuestionsDetailsComponent } from './admin-clients-questions-details.component';

describe('AdminClientsQuestionsDetailsComponent', () => {
  let component: AdminClientsQuestionsDetailsComponent;
  let fixture: ComponentFixture<AdminClientsQuestionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsQuestionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsQuestionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
