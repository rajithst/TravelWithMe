var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { GooglemapsService } from '../../services/googlemaps.service';
import { BlogServiceService } from '../../services/blog-service.service';
import './js1.js';
let BlogComponent = class BlogComponent {
    constructor(mapService, blogService, changeDetectorRef) {
        this.mapService = mapService;
        this.blogService = blogService;
        this.changeDetectorRef = changeDetectorRef;
        this.javascript1 = require('./js1');
        this.model = { userid: " ", username: " ", img: " ", postTitle: " ", body: " ", featured_img: " " };
        this.path = '';
        this.file_srcs = [];
        this.debug_size_before = [];
        this.debug_size_after = [];
    }
    ngOnInit() { }
    fileChange(input) {
        this.file_srcs = [];
        this.readFiles(input.files);
    }
    readFile(file, reader, callback) {
        reader.onload = () => {
            callback(reader.result);
            this.model.featured_img = reader.result;
        };
        reader.readAsDataURL(file);
    }
    readFiles(files, index = 0) {
        let reader = new FileReader();
        if (index in files) {
            this.readFile(files[index], reader, (result) => {
                var img = document.createElement("img");
                img.src = result;
                this.resize(img, 250, 250, (resized_jpeg, before, after) => {
                    this.debug_size_before.push(before);
                    this.debug_size_after.push(after);
                    this.file_srcs.push(resized_jpeg);
                });
            });
        }
        else {
            this.changeDetectorRef.detectChanges();
        }
    }
    resize(img, MAX_WIDTH, MAX_HEIGHT, callback) {
        return img.onload = () => {
            var width = img.width;
            var height = img.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    }
    submitBlogpost() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const data = {
            id: this.profile.identities[0].user_id,
            provider: this.profile.identities[0].provider,
            userid: this.profile.user_id,
            profilepic: this.profile.picture_large,
            name: this.profile.name
        };
        /*this.model.userid = data.userid;*/
        this.model.userid = '820503218103311';
        this.model.username = data.name,
            this.model.img = data.profilepic,
            this.model.postTitle = this.postTitle;
        this.model.body = this.body;
        this.blogService.addBlogpost(this.model).subscribe(res => {
            //this.alert = res;
        });
    }
    placeSearch() {
        console.log(this.place);
        this.mapService.getLocations(this.place).subscribe(res => {
            this.places = res.results;
            console.log(this.places);
        });
    }
    addTotag(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        let id = idAttr.nodeValue;
        /*this.val = id;*/
    }
};
BlogComponent = __decorate([
    Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [GooglemapsService,
        BlogServiceService,
        ChangeDetectorRef])
], BlogComponent);
export { BlogComponent };
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/blog/blog.component.js.map