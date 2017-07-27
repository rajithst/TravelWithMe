import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input  } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { DirectionsMapDirective } from './google-map.directive';
declare var $: any;
declare var google:any;
declare var jQuery:any;

@Component({
  selector: 'app-root',
  styleUrls: ['./map.css'],

  templateUrl:"./map.component.html",

 providers : [ GoogleMapsAPIWrapper ]
})

export class MapComponent implements OnInit {
    public latitude: number;
    public longitude: number;
    public destinationInput: FormControl;
    public destinationOutput: FormControl;
    public waypointOutput : FormControl;
    public zoom: number;
    public iconurl: string;
    public mapCustomStyles : any;
    public estimatedTime: any;
    public estimatedDistance: any;

    @ViewChild("pickupInput")
    public pickupInputElementRef: ElementRef;

     @ViewChild("pickupOutput")
    public pickupOutputElementRef: ElementRef;

     @ViewChild("scrollMe")
    private scrollContainer: ElementRef;

    @ViewChild("waypoint")
    private waypointOutputElementRef : ElementRef;

    @ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;

    public origin :any ; // its a example aleatory position
    public destination : any; // its a example aleatory position
    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private gmapsApi: GoogleMapsAPIWrapper,
      private _elementRef : ElementRef
    ) {
    }

    ngOnInit() {

        // if (window.location.href.indexOf('reload')==-1) {
        //   window.location.replace(window.location.href+'?reload');
        // }

      // $("#tripcreate").modal('show');
      //set google maps defaults
      this.zoom = 8;
      this.latitude = 7.25;
      this.longitude = 80.5795;
      //this.iconurl = '../image/map-icon.png';
      this.iconurl = '../image/map-icon.png';

     // this.mapCustomStyles = this.getMapCusotmStyles();
      //create search FormControl
      this.destinationInput = new FormControl();
      this.destinationOutput = new FormControl();
      this.waypointOutput = new FormControl();
      //set current position
      this.setCurrentPosition();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          let autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
            types: ["geocode"]
          });

          let autocompleteOutput = new google.maps.places.Autocomplete(this.pickupOutputElementRef.nativeElement, {
            types: ["geocode"]
          });
          let autocompleteWaypoint = new google.maps.places.Autocomplete(this.waypointOutputElementRef.nativeElement, {
            types:["address"]
          });

                this.setupPlaceChangedListener(autocompleteInput, 'ORG');
                this.setupPlaceChangedListener(autocompleteOutput, 'DES');
                this.setupPlaceChangedListener(autocompleteWaypoint,'WAY');
      });
    }

    private setupPlaceChangedListener(autocomplete: any, mode: any ) {
      autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {

              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();
              //verify result
              if (place.geometry === undefined) {
                return;
              }
              if (mode === 'ORG') {
                  this.vc.origin = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() };
                  this.vc.originPlaceId = place.place_id;
              }
              else if(mode==='WAY'){
                this.vc.waypoints = place.place_id;
              }

              else {
                  this.vc.destination = { longitude: place.geometry.location.lng(), latitude: place.geometry.location.lat() }; // its a example aleatory position
                  this.vc.destinationPlaceId = place.place_id;
              }

              if(this.vc.directionsDisplay === undefined){ this.mapsAPILoader.load().then(() => {
                    this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
                  });
            }

              //Update the directions
              this.vc.updateDirections();
              this.zoom = 12;
            });

         });

    }

    getDistanceAndDuration(){
      this.estimatedTime = this.vc.estimatedTime;
      this.estimatedDistance = this.vc.estimatedDistance;
    }

    scrollToBottom(): void {
      jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 3000);
    }
    private setPickUpLocation( place:any ) {
      //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
    }

    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }

    private getMapCusotmStyles() {
      // Write your Google Map Custom Style Code Here.
    }

}
