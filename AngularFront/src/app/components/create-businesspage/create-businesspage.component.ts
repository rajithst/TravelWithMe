import { Component, OnInit } from '@angular/core';
import { BusinesspageService } from '../../services/businesspage.service';
import { Router,ActivatedRoute } from '@angular/router';
import { GoogleAPIService } from '../../services/google-api.service';


@Component({
  selector: 'app-create-businesspage',
  templateUrl: './create-businesspage.component.html',
  styleUrls: ['./create-businesspage.component.css'],
})
export class CreateBusinesspageComponent implements OnInit {

  user:any;
  pagename:String;
  businesstype:Number;
  pageimage:String;
  targetareas:String;
  email:String;
  telephone:String;
  website:String;
  location:String;
  result:String;
  fautoplace:any;
  profile: any;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  private sub:any;
  private id:any;

  constructor(
    private bservices:BusinesspageService,
    private route:Router,
    private acroute: ActivatedRoute,
    private googleApi:GoogleAPIService,



  ) { }







  ngOnInit() {
    this.fautoplace='';
    this.zoom = 2;
    this.latitude = 7.7505019;
    this.longitude = 80.1652569;

    this.profile = JSON.parse(localStorage.getItem('profile'));
    const data = {
      id: this.profile.identities[0].user_id,
      provider: this.profile.identities[0].provider,
      userid: this.profile.user_id,
      profilepic :this.profile.picture_large,
      name :this.profile.name
    };


  }


  pageCreate(){

   const user = {

      id:this.id,
      pagename: this.pagename,
      email: this.email,
      telephone: this.telephone,
      website: this.website,
      businesstype: this.businesstype,

    };
    this.bservices.submitPagedata(user).subscribe(data=>{

      if(data.success){
       console.log("done");
        this.route.navigate(['/profile'])
      }else{

        console.log("error")
        //this.flashMessage.show('something went wrong',{cssClass:'alert-danger',timeout:3000});
        //this.route.navigate(['/profile'])

      }

    });

  }

  getLocation(){

    this.googleApi.getPlaces(this.location).subscribe(res=>{
      this.result = res.data.predictions;
      console.log(this.result)
    })

  }

  addToTagfrom(e){
    console.log(e.target.innerText)
    this.fautoplace = e.target.innerText;
    this.result = "";
    this.location = "";
    return false;
  }




}

