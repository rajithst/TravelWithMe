import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {

  public message:any;
    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
        this.message = params["message"];
        console.log(this.message);
      
         });
    }

  ngOnInit() {
  }

}
import {enableProdMode} from '@angular/core';

enableProdMode();


    
    
      
