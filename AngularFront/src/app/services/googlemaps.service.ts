import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GooglemapsService {



  constructor(

    private http:Http) {


  }

  getLocations(place){
    let headers = new Headers();
    headers.append('Access-Control-Allow-Headers','*');
    headers.append('Access-Control-Allow-Origin','*');

    return this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+place+'&key=AIzaSyAGVsf4PFWkyjY-5Y-pbKpm3QJ6Zmhl2Xo').map(response => response.json());

  }


}
