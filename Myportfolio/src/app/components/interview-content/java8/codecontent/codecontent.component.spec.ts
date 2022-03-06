import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecontentComponent } from './codecontent.component';

describe('CodecontentComponent', () => {
  let component: CodecontentComponent;
  let fixture: ComponentFixture<CodecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
