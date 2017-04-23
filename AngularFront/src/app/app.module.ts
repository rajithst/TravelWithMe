import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';


import 'hammerjs';
import {MdlModule} from 'angular2-mdl';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { CreateBusinesspageComponent } from './components/create-businesspage/create-businesspage.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';


import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { BusinesspageService } from './services/businesspage.service';
import { GooglemapsService } from './services/googlemaps.service';
import { BlogServiceService } from './services/blog-service.service';
import { Auth0Service } from './services/auth0.service';
import { FacebookService } from './services/facebook.service';
import { SideviewComponent } from './components/sideview/sideview.component';
import { TripComponent } from './components/trip/trip.component';





const appRoute: Routes = [

  {path: '' , component: HomeComponent} ,
  {path: 'profile' , component: ProfileComponent , canActivate: [AuthGuard]} ,
  {path: 'dashboard' , component: DashboardComponent , canActivate: [AuthGuard]} ,
  {path: 'profile/create/:me/businesspage' , component: CreateBusinesspageComponent , canActivate: [AuthGuard]} ,
  {path: 'profile/create/blog' , component: BlogComponent , canActivate: [AuthGuard]} ,
  {path: 'profile/settings/:id' , component: ProfilesettingsComponent , canActivate: [AuthGuard]},
  {path: 'profile/viewpost' , component: ViewpostComponent , canActivate: [AuthGuard]},
  {path: 'profile/newsfeed' , component: NewsfeedComponent , canActivate: [AuthGuard]},
  {path: 'profile/create/trip' , component: TripComponent , canActivate: [AuthGuard]},

];


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
    BlogComponent,
    ProfilesettingsComponent,
    ViewpostComponent,
    NewsfeedComponent,
    SideviewComponent,
    TripComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule ,
    /*FlashMessagesModule,*/
    RouterModule.forRoot(appRoute),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApfFMVtKyXv_OxrFhP4mT31yPzw_J8Eqs'
    })


  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    BusinesspageService,
    GooglemapsService,
    BlogServiceService,
    Auth0Service,
    FacebookService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
