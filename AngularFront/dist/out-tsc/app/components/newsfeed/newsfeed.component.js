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
import { BlogServiceService } from '../../services/blog-service.service';
import { AuthService } from '../../services/auth.service';
let NewsfeedComponent = class NewsfeedComponent {
    constructor(BlogService, authService) {
        this.BlogService = BlogService;
        this.authService = authService;
        this.scroller = require('./scrollcontent');
        this.bodyClasses = "fixed-sn blue-skin";
    }
    ngOnInit() {
        if (window.location.href.indexOf('reload') == -1) {
            window.location.replace(window.location.href + '?reload');
        }
        $('body').addClass(this.bodyClasses);
        $("body").css('background-color', '#ecf0f1');
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const data = {
            id: this.profile.identities[0].user_id,
            provider: this.profile.identities[0].provider,
            userid: this.profile.user_id,
            profilepic: this.profile.picture_large,
            name: this.profile.name
        };
        if (data) {
            this.authService.checkId(data).subscribe(res => {
                console.log("recieved");
                this.user = res.data;
                const follow = this.user.personal.followeusers;
                if (follow.length > 0) {
                    const Userdata = { id: data.id };
                    this.BlogService.getPosts(Userdata.id).subscribe(res => {
                        this.posts = res.data[res.data.length - 1];
                        console.log(this.posts);
                    });
                }
                else {
                }
            });
        }
    }
};
NewsfeedComponent = __decorate([
    Component({
        selector: 'app-newsfeed',
        templateUrl: './newsfeed.component.html',
        styleUrls: ['./newsfeed.component.css'],
    }),
    __metadata("design:paramtypes", [BlogServiceService,
        AuthService])
], NewsfeedComponent);
export { NewsfeedComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/newsfeed/newsfeed.component.js.map