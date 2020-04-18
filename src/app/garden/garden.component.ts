import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
public garden ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get ("https://kyga.azurewebsites.net/api/gardens?code=ZdYp93UrFtCJgmg/OhKEGe7eNBuiaGEqa7LUhpgDROAgVA/K3r9gZA==")
    .subscribe((res)=>{
      this.garden = res;
      console.log(res);
    });
  }

}
