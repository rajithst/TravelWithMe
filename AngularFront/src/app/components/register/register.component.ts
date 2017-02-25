import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  email:String;
  username:String;
  password:String;

  constructor(private validateService:ValidateService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }


  registerSubmit(){

    const user = {

      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    if(!this.validateService.validateRegister(user)){


      this.flashMessage.show('All fields must be filled',{cssClass:'alert-danger',timeout:3000});
    }

    if(!this.validateService.validateEmail(user.email)){

      this.flashMessage.show('Email must be valid',{cssClass:'alert-danger',timeout:3000});
    }
    }




}
