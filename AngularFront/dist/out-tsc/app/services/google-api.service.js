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
let GoogleAPIService = class GoogleAPIService {
    constructor(http) {
        this.http = http;
    }
    // getTopSights(city:any){
    //   let places:Array<string> = ["visiting places","tourist places","top sights","tourist attraction",city];
    //   var item = Math.floor(Math.random() * 4) + 1;
    //   var keyword = places[item];
    //   let headers = new Headers();
    //   headers.append('Access-Control-Allow-Headers','*');
    //   headers.append('Access-Control-Allow-Origin','*');
    //   return this.http.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+city+keyword+"+&key=AIzaSyD1wsxf68A21P1FVZyMBeop5X3io-2MH_E",{headers:headers}).map(res=>res.json());
    // }
    /* getPhotos(refKey:any){
       console.log(refKey);
       let headers = new Headers();
       headers.append('Access-Control-Allow-Headers','*');
       headers.append('Access-Control-Allow-Origin','*');
       return this.http.get("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+refKey+"&key=AIzaSyD1wsxf68A21P1FVZyMBeop5X3io-2MH_E",{headers:headers}).map(res=>res.json());
     }*/
    getPlaces(key) {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Headers', '*');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get("http://localhost:3000/googleAPI/getplaces/" + key, { headers: headers }).map(res => res.json());
    }
};
GoogleAPIService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], GoogleAPIService);
export { GoogleAPIService };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/services/google-api.service.js.map