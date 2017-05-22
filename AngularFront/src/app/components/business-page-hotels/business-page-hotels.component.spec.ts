import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPageHotelsComponent } from './business-page-hotels.component';

describe('BusinessPageHotelsComponent', () => {
  let component: BusinessPageHotelsComponent;
  let fixture: ComponentFixture<BusinessPageHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPageHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPageHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
