import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import {FlashMessagesModule } from 'angular2-flash-messages';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { FirebaseService } from './services/firebase.service';
import { CreateBusinesspageComponent } from './components/create-businesspage/create-businesspage.component';
import { BusinesspageService } from './services/businesspage.service';

const appRoute:Routes = [

  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile/create/:id/businesspage',component:CreateBusinesspageComponent, canActivate: [AuthGuard]}


]

export const firebaseConfig = {
  apiKey: 'AIzaSyAPaE2lYzFYFIurYT5JYn-JAXrmy2AezOI',
  authDomain: 'travelwithme-b18f1.firebaseapp.com',
  databaseURL: "https://travelwithme-b18f1.firebaseio.com",
  storageBucket: "travelwithme-b18f1.appspot.com",
  messagingSenderId: "445664524246"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    CreateBusinesspageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute),
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGVsf4PFWkyjY-5Y-pbKpm3QJ6Zmhl2Xo'
    })
  ],
  providers: [ValidateService,AuthService,AuthGuard,FirebaseService,BusinesspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
