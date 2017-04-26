import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagestatusComponent } from './pagestatus.component';

describe('PagestatusComponent', () => {
  let component: PagestatusComponent;
  let fixture: ComponentFixture<PagestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
