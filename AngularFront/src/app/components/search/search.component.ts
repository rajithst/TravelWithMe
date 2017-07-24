import { Component, OnInit } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  section:any;
  constructor(private http:Http) { }

  ngOnInit() {
  }

  getSection(e){

    this.section = e.target.id;
  


  }

  searchData(e){

    this.http.get("http://localhost:3000/users/option/search/"+this.section+"/"+e.target.value).subscribe((res:Response)=>{
      console.log(res.json)
    })


  }

}
