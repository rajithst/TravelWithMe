import { async, TestBed } from '@angular/core/testing';
import { HotelPageGalleryComponent } from './hotel-page-gallery.component';
describe('HotelPageGalleryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HotelPageGalleryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HotelPageGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/hotel-page-gallery/hotel-page-gallery.component.spec.js.map