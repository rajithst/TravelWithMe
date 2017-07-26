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
let BusinesspageService = class BusinesspageService {
    constructor(http) {
        this.http = http;
    }
    submitPagedata(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/profile/createpage", user, { headers: headers }).map(res => res.json());
    }
};
BusinesspageService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], BusinesspageService);
export { BusinesspageService };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/services/businesspage.service.js.map