import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsQuestionsComponent } from './admin-clients-questions.component';

describe('AdminClientsQuestionsComponent', () => {
  let component: AdminClientsQuestionsComponent;
  let fixture: ComponentFixture<AdminClientsQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
