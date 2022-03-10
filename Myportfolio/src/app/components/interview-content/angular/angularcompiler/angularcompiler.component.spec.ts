import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcompilerComponent } from './angularcompiler.component';

describe('AngularcompilerComponent', () => {
  let component: AngularcompilerComponent;
  let fixture: ComponentFixture<AngularcompilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularcompilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
