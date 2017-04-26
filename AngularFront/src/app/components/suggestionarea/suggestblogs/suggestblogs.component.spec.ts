import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestblogsComponent } from './suggestblogs.component';

describe('SuggestblogsComponent', () => {
  let component: SuggestblogsComponent;
  let fixture: ComponentFixture<SuggestblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
