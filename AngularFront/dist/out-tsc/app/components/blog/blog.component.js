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
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as GlobalData from '../Global.component';
export let BlogComponent = class BlogComponent {
};
BlogComponent = __decorate([
    Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        encapsulation: ViewEncapsulation.None
    }), 
    __metadata('design:paramtypes', [])
], BlogComponent);
{ }
ngOnInit();
{ }
submitBlogpost();
{
    const blogdata = {
        user_id: GlobalData.userid,
        title: this.postTitle,
        postBody: this.body
    };
    this.blogService.addBlogpost(blogdata).subscribe(res => {
        console.log(res);
    });
}
// end of upload
fileChange(event);
{
    let fileList = event.target.files;
    if (fileList.length > 0) {
        let file = fileList[0];
        let formData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:3000/blog/uploadFile', formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(data => console.log('success'), error => console.log(error));
    }
}
placeSearch();
{
    console.log(this.place);
    this.mapService.getLocations(this.place).subscribe(res => {
        this.places = res.results;
        console.log(this.places);
    });
}
addTotag(event);
{
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    this.val = id;
}
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/blog/blog.component.js.map