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
import { tokenNotExpired } from 'angular2-jwt';
const options = {
    socialButtonStyle: 'small',
    theme: {
        logo: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
        primaryColor: '#31324F'
    },
    languageDictionary: {
        title: "Log me in"
    },
};
export let Auth0Service = class Auth0Service {
    constructor() {
        this.lock = new Auth0Lock('Gcw8OrOOHWjaUsOQbMQDbHm24LI3h2Iv', 'travelproject.auth0.com', options);
        this.lock.on('authenticated', (authResult) => {
            this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }
    login() {
        // Call the show method to display the widget.
        this.lock.show();
    }
    authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }
    logout() {
        $('body').removeClass();
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.clear();
    }
};
Auth0Service = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], Auth0Service);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/services/auth0.service.js.map