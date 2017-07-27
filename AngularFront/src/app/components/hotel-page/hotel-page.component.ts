import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {enableProdMode} from '@angular/core';
import { Http,Headers,RequestOptions,Response} from '@angular/http';
@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent implements OnInit {

  public message:any;
  public hoteldata:any;
  public name:any;
  public price:any;
  public pageid:any;
  public uid:any;
  public roomdata:any;
  public sroomdata:any;

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

       this.http.get("http://localhost:3000/hotel/getroomdata/"+newstr).subscribe(data=>{
      this.sroomdata = data.json().docs;
      console.log(this.sroomdata)
    })



  }


  addRoom(){
    var pid = this.message;
    var pageid = JSON.parse(pid);

    const room = {

     uid:"1298367140244041",
     pageId:pageid,
     roomname: this.name,
     price: this.price,
     size:'4'

    }

    console.log(room)
     let headers = new Headers();
    this.http.post("http://localhost:3000/hotel/addRoom",room,{headers:headers}).subscribe((res:Response)=>{
      this.roomdata = res.json();
      console.log(this.roomdata)
    })
    
  }

}


enableProdMode();


    
    
      
