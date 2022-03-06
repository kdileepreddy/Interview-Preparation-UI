import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecontentbackComponent } from './codecontentback.component';

describe('CodecontentbackComponent', () => {
  let component: CodecontentbackComponent;
  let fixture: ComponentFixture<CodecontentbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodecontentbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecontentbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
