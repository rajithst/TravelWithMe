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
export let CreateBusinesspageComponent = class CreateBusinesspageComponent {
    constructor(bservices, route, acroute) {
        this.bservices = bservices;
        this.route = route;
        this.acroute = acroute;
    }
    ngOnInit() {
        this.zoom = 2;
        this.latitude = 7.7505019;
        this.longitude = 80.1652569;
        this.sub = this.acroute.params.subscribe(params => {
            this.id = +params['me'];
            console.log(this.id);
        });
    }
    pageCreate() {
        const user = {
            id: this.id,
            pagename: this.pagename,
            businesstype: this.businesstype,
            pageimage: 'test',
            targetareas: "1,2,3,4"
        };
        this.bservices.submitPagedata(user).subscribe(data => {
            if (data.success) {
                console.log("done");
                this.route.navigate(['/profile']);
            }
            else {
                console.log("error");
            }
        });
    }
};
CreateBusinesspageComponent = __decorate([
    Component({
        selector: 'app-create-businesspage',
        templateUrl: './create-businesspage.component.html',
        styleUrls: ['./create-businesspage.component.css'],
    }), 
    __metadata('design:paramtypes', [BusinesspageService, Router, ActivatedRoute])
], CreateBusinesspageComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/create-businesspage/create-businesspage.component.js.map