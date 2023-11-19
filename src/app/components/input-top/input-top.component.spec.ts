import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTopComponent } from './input-top.component';

describe('InputTopComponent', () => {
  let component: InputTopComponent;
  let fixture: ComponentFixture<InputTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTopComponent]
    });
    fixture = TestBed.createComponent(InputTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
