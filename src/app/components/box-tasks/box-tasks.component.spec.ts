import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTasksComponent } from './box-tasks.component';

describe('BoxTasksComponent', () => {
  let component: BoxTasksComponent;
  let fixture: ComponentFixture<BoxTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxTasksComponent]
    });
    fixture = TestBed.createComponent(BoxTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
