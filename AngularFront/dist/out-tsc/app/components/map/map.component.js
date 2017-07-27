var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { DirectionsMapDirective } from './google-map.directive';
let MapComponent = class MapComponent {
    constructor(mapsAPILoader, ngZone, gmapsApi, _elementRef) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.gmapsApi = gmapsApi;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        if (window.location.href.indexOf('reload') == -1) {
            window.location.replace(window.location.href + '?reload');
        }
        // $("#tripcreate").modal('show');
        //set google maps defaults
        this.zoom = 8;
        this.latitude = 7.25;
        this.longitude = 80.5795;
        //this.iconurl = '../image/map-icon.png';
        this.iconurl = '../image/map-icon.png';
        // this.mapCustomStyles = this.getMapCusotmStyles();
        //create search FormControl
        this.destinationInput = new FormControl();
        this.destinationOutput = new FormControl();
        this.waypointOutput = new FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
                types: ["geocode"]
            });
            let autocompleteOutput = new google.maps.places.Autocomplete(this.pickupOutputElementRef.nativeElement, {
                types: ["geocode"]
            });
            let autocompleteWaypoint = new google.maps.places.Autocomplete(this.waypointOutputElementRef.nativeElement, {
                types: ["address"]
            });
            this.setupPlaceChangedListener(autocompleteInput, 'ORG');
            this.setupPlaceChangedListener(autocompleteOutput, 'DES');
            this.setupPlaceChangedListener(autocompleteWaypoint, 'WAY');
        });
    }
    setupPlaceChangedListener(autocomplete, mode) {
        autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
                //get the place result
                let place = autocomplete.getPlace();
                //verify result
                if (place.geometry === undefined) {
                    return;
                }
                if (mode === 'ORG') {
                    this.vc.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
                    this.vc.originPlaceId = place.place_id;
                }
                else if (mode === 'WAY') {
                    this.vc.waypoints = place.place_id;
                }
                else {
                    this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; // its a example aleatory position
                    this.vc.destinationPlaceId = place.place_id;
                }
                if (this.vc.directionsDisplay === undefined) {
                    this.mapsAPILoader.load().then(() => {
                        this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                    });
                }
                //Update the directions
                this.vc.updateDirections();
                this.zoom = 12;
            });
        });
    }
    getDistanceAndDuration() {
        this.estimatedTime = this.vc.estimatedTime;
        this.estimatedDistance = this.vc.estimatedDistance;
    }
    scrollToBottom() {
        jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 3000);
    }
    setPickUpLocation(place) {
        //verify result
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }
    getMapCusotmStyles() {
        // Write your Google Map Custom Style Code Here.
    }
};
__decorate([
    ViewChild("pickupInput"),
    __metadata("design:type", ElementRef)
], MapComponent.prototype, "pickupInputElementRef", void 0);
__decorate([
    ViewChild("pickupOutput"),
    __metadata("design:type", ElementRef)
], MapComponent.prototype, "pickupOutputElementRef", void 0);
__decorate([
    ViewChild("scrollMe"),
    __metadata("design:type", ElementRef)
], MapComponent.prototype, "scrollContainer", void 0);
__decorate([
    ViewChild("waypoint"),
    __metadata("design:type", ElementRef)
], MapComponent.prototype, "waypointOutputElementRef", void 0);
__decorate([
    ViewChild(DirectionsMapDirective),
    __metadata("design:type", DirectionsMapDirective)
], MapComponent.prototype, "vc", void 0);
MapComponent = __decorate([
    Component({
        selector: 'app-root',
        styleUrls: ['./map.css'],
        templateUrl: "./map.component.html",
        providers: [GoogleMapsAPIWrapper]
    }),
    __metadata("design:paramtypes", [MapsAPILoader,
        NgZone,
        GoogleMapsAPIWrapper,
        ElementRef])
], MapComponent);
export { MapComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/map/map.component.js.map