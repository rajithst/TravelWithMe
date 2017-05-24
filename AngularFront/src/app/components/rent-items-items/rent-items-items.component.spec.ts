import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentItemsItemsComponent } from './rent-items-items.component';

describe('RentItemsItemsComponent', () => {
  let component: RentItemsItemsComponent;
  let fixture: ComponentFixture<RentItemsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentItemsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentItemsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
