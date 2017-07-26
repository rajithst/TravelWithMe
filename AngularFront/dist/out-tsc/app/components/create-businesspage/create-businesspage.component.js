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
import { BusinesspageService } from '../../services/businesspage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GoogleAPIService } from '../../services/google-api.service';
let CreateBusinesspageComponent = class CreateBusinesspageComponent {
    constructor(bservices, route, acroute, googleApi) {
        this.bservices = bservices;
        this.route = route;
        this.acroute = acroute;
        this.googleApi = googleApi;
    }
    ngOnInit() {
        this.fautoplace = '';
        this.zoom = 2;
        this.latitude = 7.7505019;
        this.longitude = 80.1652569;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const data = {
            id: this.profile.identities[0].user_id,
            provider: this.profile.identities[0].provider,
            userid: this.profile.user_id,
            profilepic: this.profile.picture_large,
            name: this.profile.name
        };
    }
    pageCreate() {
        const user = {
            id: this.id,
            pagename: this.pagename,
            email: this.email,
            telephone: this.telephone,
            website: this.website,
            businesstype: this.businesstype,
        };
        this.bservices.submitPagedata(user).subscribe(data => {
            if (data.success) {
                console.log("done");
                this.route.navigate(['/profile']);
            }
            else {
                console.log("error");
                //this.flashMessage.show('something went wrong',{cssClass:'alert-danger',timeout:3000});
                //this.route.navigate(['/profile'])
            }
        });
    }
    getLocation() {
        this.googleApi.getPlaces(this.location).subscribe(res => {
            this.result = res.data.predictions;
            console.log(this.result);
        });
    }
    addToTagfrom(e) {
        console.log(e.target.innerText);
        this.fautoplace = e.target.innerText;
        this.result = "";
        this.location = "";
        return false;
    }
};
CreateBusinesspageComponent = __decorate([
    Component({
        selector: 'app-create-businesspage',
        templateUrl: './create-businesspage.component.html',
        styleUrls: ['./create-businesspage.component.css'],
    }),
    __metadata("design:paramtypes", [BusinesspageService,
        Router,
        ActivatedRoute,
        GoogleAPIService])
], CreateBusinesspageComponent);
export { CreateBusinesspageComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/create-businesspage/create-businesspage.component.js.map