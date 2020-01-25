import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../dashboard.service';
import { ApixuService } from "../apixu.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = []
  searchLocation = [];
  
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public airData: any;

  constructor(private titleService:Title, private dashBoardService:DashboardService, private formBuilder: FormBuilder, private apixuService: ApixuService) {
    this.titleService.setTitle("AgroSmart - DashBoard");
  }

  ngOnInit() {
    this.bigChart = this.dashBoardService.bigChart();
    console.log(this.bigChart);
    this.searchLocation = this.dashBoardService.currentPlace();

    this.apixuService
      .getWeather(this.searchLocation)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
    this.apixuService
      .getAirQuality(this.searchLocation)
      .subscribe(data => {
        this.airData = data;
        console.log(this.airData);
      });
  }
    

}
