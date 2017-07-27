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
import { ActivatedRoute } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Http, } from '@angular/http';
let HotelPageComponent = class HotelPageComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.route.queryParams.subscribe(params => {
            this.message = params["message"];
            console.log(this.message);
        });
    }
    ngOnInit() {
        var str = this.message;
        var newstr = JSON.parse(str);
        this.http.get("http://localhost:3000/hotel/gethoteldata/" + newstr).subscribe(data => {
            this.hoteldata = data.json().docs[0];
            let user = "Rajith";
            console.log(this.hoteldata);
        });
    }
};
HotelPageComponent = __decorate([
    Component({
        selector: 'app-hotel-page',
        templateUrl: './hotel-page.component.html',
        styleUrls: ['./hotel-page.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Http])
], HotelPageComponent);
export { HotelPageComponent };
enableProdMode();
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/hotel-page/hotel-page.component.js.map