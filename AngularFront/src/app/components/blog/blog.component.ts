import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { GooglemapsService } from '../../services/googlemaps.service';
import { BlogServiceService } from '../../services/blog-service.service';
import { Http,Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as GlobalData  from '../Global.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',

  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  place:String;
  places:Object;
  val:String;
  id:string;
  profile: any;

  postTitle:String;
  body:String;



  constructor(
    private mapService:GooglemapsService,
    private blogService:BlogServiceService,
    private http:Http
  ) { }

  ngOnInit() {


  }

  onEvent(event) {
    event.preventDefault();
  }

  submitBlogpost(){


   const blogdata = {

      user_id:GlobalData.userid,
      title:this.postTitle,
      postBody:this.body

    };

    this.blogService.addBlogpost(blogdata).subscribe(res=>{

      console.log(res);

    })



  }

 // end of upload

  fileChange(event) {
      let fileList: FileList = event.target.files;
      if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:3000/blog/uploadFile', formData, options)
          .map(res => res.json())
          .catch(error => Observable.throw(error))
          .subscribe(
            data => console.log('success'),
            error => console.log(error)
          )
      }
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
