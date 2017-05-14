import { Injectable } from '@angular/core';
import {Subject } from 'rxjs/Subject'

@Injectable()
export class LocationPassService {

  public finalLocations = new Subject<any>();

  constructor() { }

  shareLocations(data:any){
    this.finalLocations.next(data);
  }

}
