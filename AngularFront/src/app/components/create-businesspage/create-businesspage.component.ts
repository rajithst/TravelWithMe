import { Component, OnInit } from '@angular/core';
import { BusinesspageService } from '../../services/businesspage.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-businesspage',
  templateUrl: './create-businesspage.component.html',
  styleUrls: ['./create-businesspage.component.css']
})
export class CreateBusinesspageComponent implements OnInit {

  pagename:String;
  businesstype:Number;

  constructor(
    private bservices:BusinesspageService,
    private flashMessage:FlashMessagesService,
    private route:Router,

  ) { }

  ngOnInit() {


  }
  pageCreate(){

   const user = {
      pagename: this.pagename,
      businesstype: this.businesstype
    };
    this.bservices.submitPagedata(user).subscribe(data=>{
      console.log(data)

    });

  }




}
