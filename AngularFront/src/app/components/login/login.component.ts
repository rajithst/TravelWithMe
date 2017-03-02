import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;

  constructor(
    private flashMessage:FlashMessagesService,
    private route:Router,
    private authService:AuthService,
    public af: AngularFire
    ) { }

  ngOnInit() {
  }


  loginSubmit(){

  const user = {
    email:this.email,
    password:this.password
  };

  this.authService.loginUser(user).subscribe(data =>{

    if(data.success){
      this.authService.storeData(data.token,data.user);
      this.flashMessage.show("Logged in",{cssClass:'alert-success',timeout:5000});
      this.route.navigate(['/profile']);
    }else{

      this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:5000});
      this.route.navigate(['login']);

    }
  })


}


googleLogin(){
this.af.auth.login({ email: 'email', password: 'pass' });
this.flashMessage.show("Logged in",{cssClass:'alert-success',timeout:5000});
this.route.navigate(['/profile']);
}



}
