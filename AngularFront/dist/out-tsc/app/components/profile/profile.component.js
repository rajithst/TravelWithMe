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
import { AuthService } from '../../services/auth.service';
import { FacebookService } from '../../services/facebook.service';
import { GoogleAPIService } from '../../services/google-api.service';
import { UserServicesService } from '../../services/user-services.service';
import * as GlobalData from '../Global.component';
export let ProfileComponent = class ProfileComponent {
    constructor(authService, FbService, PlaceAPI, UserServie) {
        this.authService = authService;
        this.FbService = FbService;
        this.PlaceAPI = PlaceAPI;
        this.UserServie = UserServie;
        this.bodyClasses = "fixed-sn blue-skin";
    }
    ngOnInit() {
        $('body').addClass(this.bodyClasses);
        $("body").css('background-color', '#ecf0f1');
        this.authService.checkId(GlobalData.data).subscribe(res => {
            this.user = res.data;
            this.user.me = this.user.identities[0].user_id;
            console.log(this.user);
            /*friends object*/
            this.friends = this.user.context.mutual_friends.data;
            //this.friends.followers = this.user.personal.followeusers;
            /*places*/
            this.nearby = this.user.nearby.results;
            console.log(this.nearby);
        });
    }
    ;
    FollowUser(followerid, action) {
        const userdata = {
            myid: GlobalData.data.id,
            followid: followerid
        };
        this.UserServie.ChangeOption(userdata).subscribe(res => {
            console.log(res);
        });
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css'],
    }), 
    __metadata('design:paramtypes', [AuthService, FacebookService, GoogleAPIService, UserServicesService])
], ProfileComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/profile/profile.component.js.map