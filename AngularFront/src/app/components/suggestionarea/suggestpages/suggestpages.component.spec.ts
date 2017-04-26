import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestpagesComponent } from './suggestpages.component';

describe('SuggestpagesComponent', () => {
  let component: SuggestpagesComponent;
  let fixture: ComponentFixture<SuggestpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
