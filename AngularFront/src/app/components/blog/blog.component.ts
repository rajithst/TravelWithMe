import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { GooglemapsService } from '../../services/googlemaps.service';
import { BlogServiceService } from '../../services/blog-service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    './css/froala_editor.pkgd.min.css',
    './css/froala_style.min.css'

  ],

  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {


  public js1 = require('./js/froala_editor.pkgd.min.js');
  public js2 = require('./js/page.js');



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
    private blogService:BlogServiceService
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
