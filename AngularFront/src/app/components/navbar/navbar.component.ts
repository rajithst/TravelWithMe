import { Component, OnInit } from '@angular/core';
import { GoogleAPIService } from '../../services/google-api.service';
import { Router } from '@angular/router';
import {Auth0Service} from '../../services/auth0.service'
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flocation:any;
  fautoplace:any;
  tautoplace:any;
  tlocation:any;
  profile: any;
  actoken: any;
  userid:any;
  Fresult:any;
  Tresult:any;
  constructor(
    /*private flashMessage:FlashMessagesService,*/
    private route:Router,
    private auth: Auth0Service,
    private googleApi:GoogleAPIService,
    private completerService: CompleterService
  ) { }

  ngOnInit() {
    this.fautoplace='';
    this.tautoplace='';


    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id
    };
  }

  logoutClick(){

    console.log("ss")
    this.auth.logout();
    this.route.navigate([""]);
    return false;

    }

  getFromLocation(){

    this.googleApi.getPlaces(this.flocation).subscribe(res=>{
      this.Fresult = res.data.predictions;

    })

  }

  getToLocation(){

    this.googleApi.getPlaces(this.tlocation).subscribe(res=>{
      this.Tresult = res.data.predictions;
    })

  }

  addToTagfrom(e){
    this.fautoplace = e;
    this.Fresult = '';
    this.flocation = '';
    return false;
  }


  addToTagto(e){
    this.tautoplace = e;
    this.Tresult = '';
    this.tlocation = '';
    return false;
  }








}
