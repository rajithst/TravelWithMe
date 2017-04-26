import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionareaComponent } from './suggestionarea.component';

describe('SuggestionareaComponent', () => {
  let component: SuggestionareaComponent;
  let fixture: ComponentFixture<SuggestionareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
