import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacompilerComponent } from './javacompiler.component';

describe('JavacompilerComponent', () => {
  let component: JavacompilerComponent;
  let fixture: ComponentFixture<JavacompilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavacompilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
