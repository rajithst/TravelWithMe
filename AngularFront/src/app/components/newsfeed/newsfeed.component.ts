import { Component, OnInit } from '@angular/core';

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

    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id,
      profilepic :this.profile.picture_large
    };

    const Userdata = {id:data.userid};

    this.BlogService.getPosts(Userdata.id).subscribe(res=>{
      console.log(res)

    })

    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');







  }





}
