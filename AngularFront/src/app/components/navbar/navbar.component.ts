import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private flashMessage:FlashMessagesService,
    private route:Router,
    private authService:AuthService,
    public af: AngularFire
  ) { }

  ngOnInit() {
  }

  logoutClick(){

    this.authService.logout();
    this.flashMessage.show(" Youre logged Out",{cssClass:'alert-success',timeout:5000});
    this.route.navigate(['/login']);
    return false;

  }

}
