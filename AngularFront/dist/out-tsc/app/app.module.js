var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { MdlModule } from 'angular2-mdl';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
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
import { TripComponent } from './components/trip/trip.component';
import { SideviewComponent } from './components/sideview/sideview.component';
import { PostComponent } from './components/post/post.component';
import { PagemanagerComponent } from './components/pagemanager/pagemanager.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { BusinesspageService } from './services/businesspage.service';
import { GooglemapsService } from './services/googlemaps.service';
import { BlogServiceService } from './services/blog-service.service';
import { Auth0Service } from './services/auth0.service';
import { FacebookService } from './services/facebook.service';
import { GoogleAPIService } from './services/google-api.service';
import { UserServicesService } from './services/user-services.service';
import { PagestatusComponent } from './components/pagemanager/pagestatus/pagestatus.component';
import { SuggestionareaComponent } from './components/suggestionarea/suggestionarea.component';
import { SuggestplacesComponent } from './components/suggestionarea/suggestplaces/suggestplaces.component';
import { SuggestpagesComponent } from './components/suggestionarea/suggestpages/suggestpages.component';
import { SuggestblogsComponent } from './components/suggestionarea/suggestblogs/suggestblogs.component';
import { SearchComponent } from './components/search/search.component';
import { BusinessPageComponent } from './components/business-page/business-page.component';
/*Routes*/
const appRoute = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'profile/create/businesspage', component: CreateBusinesspageComponent, canActivate: [AuthGuard] },
    { path: 'profile/create/blog', component: BlogComponent, canActivate: [AuthGuard] },
    { path: 'profile/settings/:id', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
    { path: 'profile/viewpost', component: ViewpostComponent, canActivate: [AuthGuard] },
    { path: 'profile/newsfeed', component: NewsfeedComponent, canActivate: [AuthGuard] },
    { path: 'profile/create/trip', component: TripComponent, canActivate: [AuthGuard] },
    { path: 'profile/pagemanager', component: PagemanagerComponent },
    { path: 'profile/search', component: SearchComponent },
];
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            PostComponent,
            PagemanagerComponent, PagestatusComponent, SuggestionareaComponent, SuggestplacesComponent, SuggestpagesComponent, SuggestblogsComponent, SearchComponent, BusinessPageComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            MdlModule,
            /*FlashMessagesModule,*/
            RouterModule.forRoot(appRoute, { useHash: false }),
            AgmCoreModule.forRoot({
                apiKey: 'YOUR_KEY'
            }),
            FroalaEditorModule.forRoot(),
            FroalaViewModule.forRoot()
        ],
        providers: [
            ValidateService,
            AuthService,
            AuthGuard,
            BusinesspageService,
            GooglemapsService,
            BlogServiceService,
            Auth0Service,
            FacebookService,
            GoogleAPIService,
            UserServicesService,
        ],
        bootstrap: [AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=E:/3rd Year Project/webapp/TravelwithMe/AngularFront/src/app/app.module.js.map