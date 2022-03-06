import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagecontentComponent } from './languagecontent.component';

describe('LanguagecontentComponent', () => {
  let component: LanguagecontentComponent;
  let fixture: ComponentFixture<LanguagecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
