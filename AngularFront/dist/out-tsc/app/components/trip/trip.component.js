var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LocationPassService } from '../../shared/location-pass.service';
let TripComponent = class TripComponent {
    constructor(locationService) {
        this.locationService = locationService;
    }
    ngOnInit() {
        this.locationService.finalLocations.subscribe(data => console.log(data));
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true,
            panel: document.getElementById('right-panel') });
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 7.25, lng: 80.65 }
        });
        directionsDisplay.setMap(map);
        /*    calculateAndDisplayRoute(directionsService, directionsDisplay);
        
            function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        
              var waypts = [];
              var checkboxArray:any[] = [
                'winnipeg', 'regina','calgary'
              ];
              for (var i = 0; i < checkboxArray.length; i++) {
        
                waypts.push({
                  location: checkboxArray[i],
                  stopover: true
                });
        
              }
        
              directionsService.route({
                origin: {'placeId': ''},
                destination: {'placeId': ''},
                optimizeWaypoints: true,
                travelMode: 'DRIVING'
              }, function(response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });
            }*/
        function computeTotalDistance(result) {
            var total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                total += myroute.legs[i].distance.value;
            }
            total = total / 1000;
            document.getElementById('total').innerHTML = total + ' km';
        }
    }
};
TripComponent = __decorate([
    Component({
        selector: 'app-trip',
        templateUrl: './trip.component.html',
        styleUrls: ['./trip.component.css'],
        inputs: ['dataArray']
    }),
    __metadata("design:paramtypes", [LocationPassService])
], TripComponent);
export { TripComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/trip/trip.component.js.map