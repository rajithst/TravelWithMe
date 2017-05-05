import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class BlogServiceService {

  constructor(
    private http:Http

  ) { }



  addBlogpost(data){

    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('localhost:3000/blog/submitpost',data).map(res=>res.json());



  }

  uploadFile(formData){
    let headers = new Headers();
    headers.append('enctype', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post('http://localhost:3000/blog/uploadFile', formData,{ headers: headers }).map(res => res.json());

  }


}



