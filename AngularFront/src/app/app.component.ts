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

}
