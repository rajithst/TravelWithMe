import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {enableProdMode} from '@angular/core';
import { Http,Headers,RequestOptions,} from '@angular/http';
@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {

  public message:any;
  public hoteldata:any;
    constructor(
      private route: ActivatedRoute,
      private http:Http
    
    
    ) {
        this.route.queryParams.subscribe(params => {
        this.message = params["message"];
        console.log(this.message);
      
         });
    }

  ngOnInit() {

    var str = this.message;
    var newstr = JSON.parse(str);

    this.http.get("http://localhost:3000/hotel/gethoteldata/"+newstr).subscribe(data=>{
      this.hoteldata = data.json().docs;
      let user = "Rajith"
      console.log(this.hoteldata)
    })



  }

}


enableProdMode();


    
    
      
