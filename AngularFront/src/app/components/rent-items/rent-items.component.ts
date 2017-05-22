import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-items',
  templateUrl: './rent-items.component.html',
  styleUrls: ['./rent-items.component.css']
})
export class RentItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

 $(function(){
        $("#panel51").load("home.html");
        $("#panel53").load("items.html");
        $("#panel55").load("gallery.html");
        $("#panel56").load("aboutUs.html");
        $("#panel57").load("contactUs.html");
        });