import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-items-items',
  templateUrl: './rent-items-items.component.html',
  styleUrls: ['./rent-items-items.component.css']
})
export class RentItemsItemsComponent implements OnInit {

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
      
      
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

   
   