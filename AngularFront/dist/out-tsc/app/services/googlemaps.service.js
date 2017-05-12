var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
export let GooglemapsService = class GooglemapsService {
    constructor(http) {
        this.http = http;
    }
    getLocations(place) {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Headers', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + place + '&key=AIzaSyCskb-CN9GH0d5KmjmEL8gZ52SvTYuN7mI').map(response => response.json());
    }
};
GooglemapsService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], GooglemapsService);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/services/googlemaps.service.js.map