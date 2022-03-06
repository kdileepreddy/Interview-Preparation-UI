import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagecontentbackComponent } from './languagecontentback.component';

describe('LanguagecontentbackComponent', () => {
  let component: LanguagecontentbackComponent;
  let fixture: ComponentFixture<LanguagecontentbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagecontentbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagecontentbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
