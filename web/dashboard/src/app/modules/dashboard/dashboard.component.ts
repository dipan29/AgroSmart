import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../dashboard.service';
import { ApixuService } from "../apixu.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  chartsData = [];
  searchLocation = [];
  
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public airData: any;

  nodeData: [];

  constructor(
    private titleService:Title, 
    private dashBoardService:DashboardService, 
    private formBuilder: FormBuilder, 
    private apixuService: ApixuService,
    private authService: AuthService
    ) {
    this.titleService.setTitle("AgroSmart - DashBoard");
  }

  ngOnInit() {
    
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
    
    this.dashBoardService
      .getNodeData()
      .subscribe(data => {
        if(data.message) {
          this.nodeData = data.nodeDetails;
          console.log(this.nodeData);
        }
    });

    
      // console.log("Extracting Layer Data");
      // var deviceID = JSON.parse({ this.nodeData });
      // console.log("First Device ID " + deviceID);
    

    this.bigChart = this.dashBoardService.bigChart();
    console.log(this.bigChart);
    
  }
    

}
