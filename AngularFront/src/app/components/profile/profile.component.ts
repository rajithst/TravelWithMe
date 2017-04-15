import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FacebookService } from '../../services/facebook.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  profile: any;
  actoken: any;
  userid:any;


  constructor(
    private authService: AuthService,

    private FbService: FacebookService

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
            const data = {
              id: this.profile.identities[0].user_id,
              provider: this.profile.identities[0].provider,
              userid: this.profile.user_id
            };

      this.authService.checkId(data).subscribe(res => {
        this.user = JSON.parse(res.data);
        console.log(this.user);

        const actoken = this.user.identities[0].access_token;
        const userid = this.user.identities[0].user_id;

        this.FbService.placesLiked(actoken,userid).subscribe(places=>{
          console.log(places)
        })

      });


  }

}
