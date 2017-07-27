import { async, TestBed } from '@angular/core/testing';
import { HotelPageContactComponent } from './hotel-page-contact.component';
describe('HotelPageContactComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HotelPageContactComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HotelPageContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/hotel-page-contact/hotel-page-contact.component.spec.js.map