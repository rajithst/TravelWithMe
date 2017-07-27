var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { Directive, Input } from '@angular/core';
let DirectionsMapDirective = class DirectionsMapDirective {
    constructor(gmapsApi) {
        this.gmapsApi = gmapsApi;
    }
    updateDirections() {
        this.gmapsApi.getNativeMap().then(map => {
            if (!this.originPlaceId || !this.destinationPlaceId) {
                return;
            }
            var directionsService = new google.maps.DirectionsService;
            var me = this;
            var latLngA = new google.maps.LatLng({ lat: this.origin.latitude, lng: this.origin.longitude });
            var latLngB = new google.maps.LatLng({ lat: this.destination.latitude, lng: this.destination.longitude });
            this.directionsDisplay.setMap(map);
            this.directionsDisplay.setOptions({
                polylineOptions: {
                    strokeWeight: 8,
                    strokeOpacity: 0.7,
                    strokeColor: '#00468c'
                }
            });
            this.directionsDisplay.setDirections({ routes: [] });
            directionsService.route({
                origin: { placeId: this.originPlaceId },
                destination: { placeId: this.destinationPlaceId },
                waypoints: [{ stopover: true, location: { placeId: this.waypoints } }],
                avoidHighways: true,
                travelMode: google.maps.DirectionsTravelMode.DRIVING
                //travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    me.directionsDisplay.setDirections(response);
                    map.setZoom(30);
                    //console.log(me.getcomputeDistance (latLngA, latLngB));
                    var point = response.routes[0].legs[0];
                    me.estimatedTime = point.duration.text;
                    me.estimatedDistance = point.distance.text;
                    console.log(me.estimatedTime);
                    console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                }
                else {
                    console.log('Directions request failed due to ' + status);
                }
            });
        });
    }
    getcomputeDistance(latLngA, latLngB) {
        return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "origin", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destination", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "originPlaceId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destinationPlaceId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "waypoints", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "directionsDisplay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedTime", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedDistance", void 0);
DirectionsMapDirective = __decorate([
    Directive({
        selector: 'sebm-google-map-directions'
    }),
    __metadata("design:paramtypes", [GoogleMapsAPIWrapper])
], DirectionsMapDirective);
export { DirectionsMapDirective };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/map/google-map.directive.js.map