import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  latitude: number =7.7505019;
  longitude: number = 80.1652569;
  zoom: number = 10;
}
