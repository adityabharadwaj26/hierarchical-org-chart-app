import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDataComponent } from './graph-data.component';

describe('GraphDataComponent', () => {
  let component: GraphDataComponent;
  let fixture: ComponentFixture<GraphDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphDataComponent]
    });
    fixture = TestBed.createComponent(GraphDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
