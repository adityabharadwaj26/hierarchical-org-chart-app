import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeReportingModalComponent } from './change-reporting-modal.component';

describe('ChangeReportingModalComponent', () => {
  let component: ChangeReportingModalComponent;
  let fixture: ComponentFixture<ChangeReportingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeReportingModalComponent]
    });
    fixture = TestBed.createComponent(ChangeReportingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
