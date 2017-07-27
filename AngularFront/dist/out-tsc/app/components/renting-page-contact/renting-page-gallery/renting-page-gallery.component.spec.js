import { async, TestBed } from '@angular/core/testing';
import { RentingPageGalleryComponent } from './renting-page-gallery.component';
describe('RentingPageGalleryComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RentingPageGalleryComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RentingPageGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/renting-page-contact/renting-page-gallery/renting-page-gallery.component.spec.js.map