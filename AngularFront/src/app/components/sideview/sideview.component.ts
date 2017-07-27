import { Component, OnInit } from '@angular/core';
import {TripService} from '../../services/trip.service';
import { Trip} from '../class/trip.class';

@Component({
  selector: 'app-sideview',
  templateUrl: './sideview.component.html',
  styleUrls: ['./sideview.component.css']
})
export class SideviewComponent implements OnInit {
  bodyClasses:string ="fixed-sn blue-skin";
  constructor(
    public tripservice : TripService
  ) { }

  ngOnInit() {
    $('body').addClass(this.bodyClasses);
    $("body").css( 'background-color', '#ecf0f1');
    this.gettrip();
  }
  trips : Trip;
  gettrip(){
    this.tripservice.getTrips()
    .subscribe(trips =>{
      this.trips = trips
    })
  }

}
