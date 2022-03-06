import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacodeComponent } from './javacode.component';

describe('JavacodeComponent', () => {
  let component: JavacodeComponent;
  let fixture: ComponentFixture<JavacodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavacodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
