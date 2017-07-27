import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    if (window.location.href.indexOf('reload')==-1) {
      window.location.replace(window.location.href+'?reload');
    }
  }
}
