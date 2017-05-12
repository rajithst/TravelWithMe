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
import { Router } from '@angular/router';
import { Auth0Service } from '../../services/auth0.service';
export let NavbarComponent = class NavbarComponent {
    constructor(
        /*private flashMessage:FlashMessagesService,*/
        route, auth) {
        this.route = route;
        this.auth = auth;
    }
    ngOnInit() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const data = {
            id: this.profile.identities[0].user_id,
            provider: this.profile.identities[0].provider,
            userid: this.profile.user_id
        };
    }
    logoutClick() {
        console.log("ss");
        this.auth.logout();
        this.route.navigate([""]);
        return false;
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }), 
    __metadata('design:paramtypes', [Router, Auth0Service])
], NavbarComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/navbar/navbar.component.js.map