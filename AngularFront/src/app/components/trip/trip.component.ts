import { Component, OnInit } from '@angular/core';
import {LocationPassService} from '../../shared/location-pass.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  inputs:['dataArray']
})
export class TripComponent implements OnInit {

  constructor(private locationService:LocationPassService) { }

  ngOnInit() {

    this.locationService.finalLocations.subscribe(
      data=>console.log(data)

    )
  }


}
