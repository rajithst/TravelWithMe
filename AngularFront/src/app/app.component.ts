import { Component } from '@angular/core';
import {Auth0Service} from './services/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: Auth0Service) {}

  ngOnInit(){
    // if (window.location.href.indexOf('reload')==-1) {
    //   window.location.replace(window.location.href+'?reload');
    // }
  }

  title = 'app works!';
  lat: number = 51.678418;
  lng: number = 7.809007;

}


