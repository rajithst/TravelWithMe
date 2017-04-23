import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router'


declare const Auth0Lock: any;

const  options = {


  socialButtonStyle: 'small',
  theme: {
    logo: 'https://example.com/logo.png',
    primaryColor: '#31324F'
  },
  languageDictionary: {
    title: "Log me in"
  },

};

@Injectable()


export class Auth0Service {

  lock = new Auth0Lock('Gcw8OrOOHWjaUsOQbMQDbHm24LI3h2Iv', 'travelproject.auth0.com', options );

  constructor( private router:Router) {


    this.lock.on('authenticated', (authResult: any) => {
      this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
        if (error){
          throw new Error(error);
        }

        console.log(authResult.idToken);
        console.log(profile);

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(profile));

      });
    });


  }


public login() {
  // Call the show method to display the widget.
  this.lock.show();

}

public authenticated() {
  // Check if there's an unexpired JWT
  // This searches for an item in localStorage with key == 'id_token'
  return tokenNotExpired();
}

public logout() {
  // Remove token from localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
}







}
