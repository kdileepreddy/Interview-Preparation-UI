import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Java8Component } from './java8.component';

describe('Java8Component', () => {
  let component: Java8Component;
  let fixture: ComponentFixture<Java8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Java8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Java8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
