import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],

})
export class NewsfeedComponent implements OnInit{
  public scroller = require('./scrollcontent');

  constructor() { }

  user: any;
  profile: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";
  friends:any;
  nearby:any;
  results:any;
  followers:any;


  ngOnInit() {

    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');



  }





}
