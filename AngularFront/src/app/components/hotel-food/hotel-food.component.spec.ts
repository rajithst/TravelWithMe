import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFoodComponent } from './hotel-food.component';

describe('HotelFoodComponent', () => {
  let component: HotelFoodComponent;
  let fixture: ComponentFixture<HotelFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
