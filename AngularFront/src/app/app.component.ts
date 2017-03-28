import { Component } from '@angular/core';
import {Auth0Service} from './services/auth0.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: Auth0Service) {}

  title = 'app works!';
  latitude: number =7.7505019;
  longitude: number = 80.1652569;
  zoom: number = 10;
}
