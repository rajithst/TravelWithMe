import { BrowserModule } from '@angular/platform-browser';import { NgModule } from '@angular/core';import { FormsModule } from '@angular/forms';import { HttpModule } from '@angular/http';import { RouterModule, Routes } from '@angular/router';import { AgmCoreModule } from 'angular2-google-maps/core';import 'hammerjs';import {MdlModule} from 'angular2-mdl';/* components */import { AppComponent } from './app.component';import { NavbarComponent } from './components/navbar/navbar.component';import { LoginComponent } from './components/login/login.component';import { RegisterComponent } from './components/register/register.component';import { ProfileComponent } from './components/profile/profile.component';import { DashboardComponent } from './components/dashboard/dashboard.component';import { HomeComponent } from './components/home/home.component';import { AuthGuard } from './services/auth.guard';import { CreateBusinesspageComponent } from './components/create-businesspage/create-businesspage.component';import { BlogComponent } from './components/blog/blog.component';import { ProfilesettingsComponent } from './components/profilesettings/profilesettings.component';import { ViewpostComponent } from './components/viewpost/viewpost.component';import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';import { TripComponent } from './components/trip/trip.component';import { SideviewComponent } from './components/sideview/sideview.component';import { PostComponent } from './components/post/post.component';import { PagemanagerComponent } from './components/pagemanager/pagemanager.component';/*Services */import { ValidateService } from './services/validate.service';import { AuthService } from './services/auth.service';import { BusinesspageService } from './services/businesspage.service';import { GooglemapsService } from './services/googlemaps.service';import { BlogServiceService } from './services/blog-service.service';import { Auth0Service } from './services/auth0.service';import { FacebookService } from './services/facebook.service';import { GoogleAPIService } from './services/google-api.service';import { UserServicesService } from './services/user-services.service';
import { PagestatusComponent } from './components/pagemanager/pagestatus/pagestatus.component';/*Routes*/const appRoute: Routes = [  {path: '' , component: HomeComponent} ,  {path: 'profile' , component: ProfileComponent , canActivate: [AuthGuard]} ,  {path: 'dashboard' , component: DashboardComponent , canActivate: [AuthGuard]} ,  {path: 'profile/create/:me/businesspage' , component: CreateBusinesspageComponent , canActivate: [AuthGuard]} ,  {path: 'profile/create/blog' , component: BlogComponent , canActivate: [AuthGuard]} ,  {path: 'profile/settings/:id' , component: ProfilesettingsComponent , canActivate: [AuthGuard]},  {path: 'profile/viewpost' , component: ViewpostComponent , canActivate: [AuthGuard]},  {path: 'profile/newsfeed' , component: NewsfeedComponent , canActivate: [AuthGuard]},  {path: 'profile/create/trip' , component: TripComponent , canActivate: [AuthGuard]},  {path: 'profile/pagemanager' , component: PagemanagerComponent },];@NgModule({  declarations: [    AppComponent,    NavbarComponent,    LoginComponent,    RegisterComponent,    ProfileComponent,    DashboardComponent,    HomeComponent,    CreateBusinesspageComponent,    BlogComponent,    ProfilesettingsComponent,    ViewpostComponent,    NewsfeedComponent,    SideviewComponent,    TripComponent,    PostComponent,    PagemanagerComponent, PagestatusComponent,  ],  imports: [    BrowserModule,    FormsModule,    HttpModule,    MdlModule ,    /*FlashMessagesModule,*/    RouterModule.forRoot(appRoute),    AgmCoreModule.forRoot({      apiKey: 'AIzaSyD1wsxf68A21P1FVZyMBeop5X3io-2MH_E'    })  ],  providers: [    ValidateService,    AuthService,    AuthGuard,    BusinesspageService,    GooglemapsService,    BlogServiceService,    Auth0Service,    FacebookService,    GoogleAPIService,    UserServicesService  ],  bootstrap: [AppComponent]})export class AppModule { }