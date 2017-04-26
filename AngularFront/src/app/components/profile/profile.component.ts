
import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FacebookService } from '../../services/facebook.service';
import { GoogleAPIService } from '../../services/google-api.service';
import {  UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})




export class ProfileComponent implements OnInit,OnDestroy {

  user: any;
  profile: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";
  friends:any;
  nearby:any;
  results:any;
  followers:any;




  constructor(
    private authService: AuthService,
    private FbService: FacebookService,
    private PlaceAPI:GoogleAPIService,
    private UserServie:UserServicesService

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
          this.user = res.data;
          this.user.me = this.user.identities[0].user_id;
          console.log(this.user);


          /*friends object*/
          this.friends = this.user.context.mutual_friends.data;
          this.friends.followers = this.user.personal.followeusers;

          /*places*/

          this.nearby = this.user.nearby.results;
          console.log(this.nearby)


          });
        };

   ngOnDestroy() {
   /* $('body').removeClass();*/
  }


  FollowUser(followerid:any,action:number){

    const userdata:any = {
      myid:JSON.parse(localStorage.getItem('profile')).identities[0].user_id,
      followid:followerid

    };
    this.UserServie.ChangeOption(userdata).subscribe(res=>{

      console.log(res)

     })

  }


}
