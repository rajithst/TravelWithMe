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
import * as GlobalData from '../Global.component';
import { BlogServiceService } from '../../services/blog-service.service';
export let NewsfeedComponent = class NewsfeedComponent {
    constructor(BlogService) {
        this.BlogService = BlogService;
        this.scroller = require('./scrollcontent');
        this.bodyClasses = "fixed-sn blue-skin";
    }
    ngOnInit() {
        const Userdata = { id: GlobalData.userid };
        this.BlogService.getPosts(Userdata.id).subscribe(res => {
            console.log(res);
        });
        $('body').addClass(this.bodyClasses);
        $("body").css('background-color', '#ecf0f1');
    }
};
NewsfeedComponent = __decorate([
    Component({
        selector: 'app-newsfeed',
        templateUrl: './newsfeed.component.html',
        styleUrls: ['./newsfeed.component.css'],
    }), 
    __metadata('design:paramtypes', [BlogServiceService])
], NewsfeedComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/newsfeed/newsfeed.component.js.map