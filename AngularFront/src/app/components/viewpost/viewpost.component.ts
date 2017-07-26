import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Http,Headers,Response } from '@angular/http';



@Component({
  selector: 'app-viewpost',
  styleUrls: ['viewpost.component.css'],
  templateUrl: './viewpost.component.html',
  encapsulation:ViewEncapsulation.None
})
export class ViewpostComponent implements OnInit {
  bodyClasses:string ="fixed-sn blue-skin";
  postID: string;
  postdata:any;


  constructor(route: ActivatedRoute, private http:Http) {
    this.postID = route.snapshot.params['id'];
      

  }

  ngOnInit() {


    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');
    let headers = new Headers();
    this.http.get("http://localhost:3000/blog/getPostdata/"+this.postID,{headers:headers}).subscribe((res:Response)=>{
      this.postdata = res.json().data[0];
      console.log(this.postdata)
    })

  


  }

}
