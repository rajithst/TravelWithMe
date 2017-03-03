import { Component, OnInit } from '@angular/core';
import { BusinesspageService } from '../../services/businesspage.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-create-businesspage',
  templateUrl: './create-businesspage.component.html',
  styleUrls: ['./create-businesspage.component.css']
})
export class CreateBusinesspageComponent implements OnInit {

  user:any;
  pagename:String;
  businesstype:Number;
  pageimage:String;
  targetareas:String;

  constructor(
    private bservices:BusinesspageService,
    private flashMessage:FlashMessagesService,
    private route:Router,
    private authService:AuthService

  ) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile=>{
        this.user = profile.user;

      },

      err=>{
        return false;

      })
  }


  pageCreate(){

   const user = {

      id:this.user._id,
      pagename: this.pagename,
      businesstype: this.businesstype,
      pageimage:'test',
      targetareas:"1,2,3,4"
    };
    this.bservices.submitPagedata(user).subscribe(data=>{

      if(data.success){
        this.flashMessage.show('New Page created',{cssClass:'alert-success',timeout:3000});
        this.route.navigate(['/profile'])
      }else{

        this.flashMessage.show('something went wrong',{cssClass:'alert-danger',timeout:3000});
        this.route.navigate(['/profile'])

      }

    });

  }




}
