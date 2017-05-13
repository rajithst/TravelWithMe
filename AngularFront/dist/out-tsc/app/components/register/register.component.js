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
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
export let RegisterComponent = class RegisterComponent {
    constructor(validateService, 
        //private flashMessage:FlashMessagesService,
        authservice, route) {
        this.validateService = validateService;
        this.authservice = authservice;
        this.route = route;
    }
    ngOnInit() {
    }
    registerSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
        };
        if (!this.validateService.validateRegister(user)) {
        }
        if (!this.validateService.validateEmail(user.email)) {
        }
        this.authservice.registerUser(user).subscribe(data => {
            if (data.success) {
                //this.flashMessage.show('Youre registered',{cssClass:'alert-success',timeout:3000});
                this.route.navigate(['/login']);
            }
            else {
                //this.flashMessage.show('something went wrong',{cssClass:'alert-danger',timeout:3000});
                this.route.navigate(['/register']);
            }
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }), 
    __metadata('design:paramtypes', [ValidateService, AuthService, Router])
], RegisterComponent);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/components/register/register.component.js.map