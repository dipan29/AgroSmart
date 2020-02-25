import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../dashboard.service';
import { ApixuService } from "../apixu.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from '../auth.service';
import { GraphsService } from '../graphs.service';

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

  nodeData = [];

  constructor(
    private titleService:Title, 
    private dashBoardService:DashboardService, 
    private apixuService: ApixuService,
    private graphService: GraphsService
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

    let today = new Date();
    let back = new Date();
    back.setDate(back.getDate() - 10);
    this.nodeData = this.graphService.getNodeData("Temperature", back.toISOString() , today.toISOString());
    console.log(this.nodeData[0]);
      
    this.bigChart = this.dashBoardService.bigChart();
    console.log(this.bigChart);
    
  }
    

}
