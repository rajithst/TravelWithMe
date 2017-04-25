

import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import {Auth0Service} from '../../services/auth0.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(

    private auth: Auth0Service

  ) { }

  ngOnInit() {
  }

}
