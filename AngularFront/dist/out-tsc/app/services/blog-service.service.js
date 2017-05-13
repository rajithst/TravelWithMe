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
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
export let BlogServiceService = class BlogServiceService {
    constructor(http) {
        this.http = http;
    }
    addBlogpost(data) {
        console.log(data);
        let body = JSON.stringify(data);
        let header = new Headers({ 'Content-Type': 'application/json' });
        let res = new RequestOptions({ headers: header });
        return this.http.post('http://localhost:3000/blog/submitpost', body, res).map(res => res.json());
    }
    getPosts(id) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return this.http.get('http://localhost:3000/blog/getPosts/' + id).map(res => res.json());
    }
};
BlogServiceService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], BlogServiceService);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/services/blog-service.service.js.map