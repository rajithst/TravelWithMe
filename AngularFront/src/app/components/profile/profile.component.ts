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
          this.user = res.data;
           /*this.user.me = this.user.identities[0].user_id;*!/*/

          console.log(this.user)
        });

      }


}
