var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
export let ViewpostComponent = class ViewpostComponent {
    constructor() {
        this.bodyClasses = "fixed-sn blue-skin";
    }
    ngOnInit() {
        $('body').addClass(this.bodyClasses);
        $("body").css('background-color', '#ecf0f1');
    }
};
ViewpostComponent = __decorate([
    Component({
        selector: 'app-viewpost',
        styleUrls: ['viewpost.component.css'],
        templateUrl: './viewpost.component.html',
        encapsulation: ViewEncapsulation.None
    }), 
    __metadata('design:paramtypes', [])
], ViewpostComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/viewpost/viewpost.component.js.map