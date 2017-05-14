import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  inputs:['dataArray']
})
export class TripComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  console.log(this.dataArray)
  }


}
