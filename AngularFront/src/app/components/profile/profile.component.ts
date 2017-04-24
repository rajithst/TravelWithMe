import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FacebookService } from '../../services/facebook.service';
import { GoogleAPIService } from '../../services/google-api.service';
import {THIS_EXPR} from "@angular/compiler/src/output/output_ast";
import {isUndefined} from "util";

@Component({
  selector: 'body',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})




export class ProfileComponent implements OnInit,OnDestroy {

  user: any;
  profile: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";
  friends:any;
  hometown:any;
  results:any;



  constructor(
    private authService: AuthService,
    private FbService: FacebookService,
    private PlaceAPI:GoogleAPIService

  ) { }



  ngOnInit() {


    $('body').addClass(this.bodyClasses);

   /* this.authService.getProfile().subscribe(profile=>{
      this.user = profile.user;
    },

    err=>{
      console.log(err);
      return false;

    })*/

      this.profile = JSON.parse(localStorage.getItem('profile'));
            const data = {
              id: this.profile.identities[0].user_id,
              provider: this.profile.identities[0].provider,
              userid: this.profile.user_id
            };

        this.authService.checkId(data).subscribe(res => {
          this.user = JSON.parse(res.data);
          this.user.me = this.user.identities[0].user_id;
          this.friends = this.user.context.mutual_friends.data;
          this.hometown = this.user.hometown.name;


          this.PlaceAPI.getTopSights(this.hometown).subscribe(res=>{
            this.results = res.results;


         /*   for (var i = 0;i<this.results.length;i++) {
              if (this.results[i].photos != undefined) {
                const place_ref = this.results[i].photos[0].photo_reference;
                console.log(place_ref)
                this.PlaceAPI.getPhotos(place_ref).subscribe(res=>{
                  console.log(res)
                 });
              }
            }*/
                 });




          });






        };

   ngOnDestroy() {
    $('body').removeClass();
  }


}
