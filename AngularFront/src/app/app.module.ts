import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import {FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from 'angular2-google-maps/core';


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

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { BusinesspageService } from './services/businesspage.service';
import { GooglemapsService } from './services/googlemaps.service';


const appRoute:Routes = [

  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile/create/:id/businesspage',component:CreateBusinesspageComponent, canActivate: [AuthGuard]},
  {path:'profile/create/:id/blog',component:BlogComponent, canActivate: [AuthGuard]}


]


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


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute),
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCskb-CN9GH0d5KmjmEL8gZ52SvTYuN7mI'
    })
  ],
  providers: [ValidateService,AuthService,AuthGuard,BusinesspageService,GooglemapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
