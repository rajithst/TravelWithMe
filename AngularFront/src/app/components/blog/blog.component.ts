import { Component, OnInit } from '@angular/core';
import { GooglemapsService } from '../../services/googlemaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  place:String;

  constructor(
    private mapService:GooglemapsService,
    private route:Router
  ) { }

  ngOnInit() {
  }


  submitBlogPost(){

    console.log('submit');

  }

  placeSearch(){

    console.log(this.place);
    this.mapService.getLocations(this.place).subscribe(res=>{

      console.log(res);
    })

  }


}
