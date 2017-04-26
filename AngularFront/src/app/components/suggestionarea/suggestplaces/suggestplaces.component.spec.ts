import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestplacesComponent } from './suggestplaces.component';

describe('SuggestplacesComponent', () => {
  let component: SuggestplacesComponent;
  let fixture: ComponentFixture<SuggestplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
