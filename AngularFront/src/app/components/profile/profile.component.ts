import { Component, OnInit,OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FacebookService } from '../../services/facebook.service';

@Component({
  selector: 'body',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})




export class ProfileComponent implements OnInit,OnDestroy {

  user: any;
  profile: any;
  actoken: any;
  userid:any;
  bodyClasses:string = "fixed-sn blue-skin";


  constructor(
    private authService: AuthService,
    private FbService: FacebookService

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

          console.log(this.user)
        });

      }

   ngOnDestroy() {
    $('body').removeClass();
  }


}
