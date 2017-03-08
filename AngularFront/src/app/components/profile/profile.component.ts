import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {Auth0Service} from '../../services/auth0.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Object;
  profile:any

  constructor(
    private authService:AuthService,
    private route:Router,
    private auth: Auth0Service

  ) { }

  ngOnInit() {

   /* this.authService.getProfile().subscribe(profile=>{
      this.user = profile.user;
    },

    err=>{
      console.log(err);
      return false;

    })*/

      this.profile = JSON.parse(localStorage.getItem('profile'));


  }

}
