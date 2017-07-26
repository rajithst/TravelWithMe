var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { GoogleAPIService } from '../../services/google-api.service';
import { Router } from '@angular/router';
import { Auth0Service } from '../../services/auth0.service';
import { LocationPassService } from '../../shared/location-pass.service';
let NavbarComponent = class NavbarComponent {
    constructor(
        /*private flashMessage:FlashMessagesService,*/
        route, auth, googleApi, locationService) {
        this.route = route;
        this.auth = auth;
        this.googleApi = googleApi;
        this.locationService = locationService;
    }
    ngOnInit() {
        this.fautoplace = '';
        this.tautoplace = '';
        this.dataArray = {};
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const data = {
            id: this.profile.identities[0].user_id,
            provider: this.profile.identities[0].provider,
            userid: this.profile.user_id
        };
    }
    logoutClick() {
        this.auth.logout();
        this.route.navigate([""]);
        return false;
    }
    getFromLocation() {
        this.googleApi.getPlaces(this.flocation).subscribe(res => {
            this.Fresult = res.data.predictions;
            console.log(this.Fresult);
        });
    }
    getToLocation() {
        this.googleApi.getPlaces(this.tlocation).subscribe(res => {
            this.Tresult = res.data.predictions;
            console.log(this.Tresult);
        });
    }
    addToTagfrom(e) {
        this.dataArray.first = e.target.id;
        this.fautoplace = e.target.innerText;
        this.Fresult = '';
        this.flocation = '';
        return false;
    }
    addToTagto(e) {
        this.dataArray.last = e.target.id;
        this.tautoplace = e.target.innerText;
        this.Tresult = '';
        this.tlocation = '';
        return false;
    }
    callLocationPass() {
        this.locationService.shareLocations(this.dataArray);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "dataArray", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        Auth0Service,
        GoogleAPIService,
        LocationPassService])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/navbar/navbar.component.js.map