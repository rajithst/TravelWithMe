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
import { Http } from '@angular/http';
let SearchComponent = class SearchComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getSection(e) {
        this.section = e.target.id;
        console.log(this.section);
    }
    searchData(e) {
        this.http.get("http://localhost:3000/users/option/search/" + this.section + "/" + e.target.value).subscribe((res) => {
            console.log(res.json);
        });
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    }),
    __metadata("design:paramtypes", [Http])
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/search/search.component.js.map