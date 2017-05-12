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
import { AuthService } from '../../../services/auth.service';
export let SuggestplacesComponent = class SuggestplacesComponent {
    constructor(authService) {
        this.authService = authService;
        this.bodyClasses = "fixed-sn blue-skin";
    }
    ngOnInit() {
        $('body').addClass(this.bodyClasses);
        $("body").css('background-color', '#ecf0f1');
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const data = {
            id: this.profile.identities[0].user_id,
            provider: this.profile.identities[0].provider,
            userid: this.profile.user_id
        };
        this.authService.checkId(data).subscribe(res => {
            this.user = res.data;
            this.user.me = this.user.identities[0].user_id;
            console.log(this.user);
            /*places*/
            this.nearby = this.user.nearby.results;
            console.log(this.nearby);
        });
    }
};
SuggestplacesComponent = __decorate([
    Component({
        selector: 'app-suggestplaces',
        templateUrl: './suggestplaces.component.html',
        styleUrls: ['./suggestplaces.component.css']
    }), 
    __metadata('design:paramtypes', [AuthService])
], SuggestplacesComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/suggestionarea/suggestplaces/suggestplaces.component.js.map