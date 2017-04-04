import { Component, OnInit } from '@angular/core';
import { GooglemapsService } from '../../services/googlemaps.service';
import { BlogServiceService } from '../../services/blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public tether = require('./js/tether.min.js');


  place:String;
  places:Object;
  val:String;
  id:string;


  name:String;
  tags:String;
  geo:String;
  body:String;



  constructor(
    private mapService:GooglemapsService,
    private blogService:BlogServiceService,
    private route:Router,
  ) { }

  ngOnInit() {
  }

  submitBlogpost(){
    const blogdata = {

      name:this.name,
      tags:this.tags,
      geo:this.geo,
      body:this.body
    };

    this.blogService.addBlogpost(blogdata).subscribe(res=>{

      console.log(res);

    })



  }


  placeSearch(){

    console.log(this.place);
    this.mapService.getLocations(this.place).subscribe(res=>{
      this.places= res.results;
      console.log(this.places)
    })

  }

  addTotag(event){

    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    this.val = id;

  }




}
