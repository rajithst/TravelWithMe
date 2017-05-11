import { Component, OnInit } from '@angular/core';
import * as GlobalData  from '../Global.component';
import { BlogServiceService } from  '../../services/blog-service.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],

})
export class NewsfeedComponent implements OnInit{
  public scroller = require('./scrollcontent');

  constructor(
    private BlogService:BlogServiceService

  ) { }

  user: any;
  profile: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";
  friends:any;
  nearby:any;
  results:any;
  followers:any;


  ngOnInit() {

    const Userdata = {id:GlobalData.userid};

    this.BlogService.getPosts(Userdata.id).subscribe(res=>{
      console.log(res)

    })

    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');







  }





}
