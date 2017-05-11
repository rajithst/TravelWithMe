import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogServiceService {

  constructor(
    private http:Http

  ) { }



  addBlogpost(data:any){


    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/blog/submitpost',data,{headers:headers}).map(res=>res.json());
  }

  uploadFile(formData){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.post('http://localhost:3000/blog/uploadFile', formData,{ headers: headers }).map(res => res.json());

  }


  getPosts(id:any){

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return this.http.get('http://localhost:3000/blog/getPosts/:'+id).map(res => res.json());

  }


}



