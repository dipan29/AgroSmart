import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../dashboard.service';
import { ApixuService } from '../apixu.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchLocation = [];

  // Graph Details
  bigChart = [];
  xdata = [];
  title: string;
  subtitle: string;

  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public airData: any;

  constructor(
    private titleService: Title,
    private dashBoardService: DashboardService,
    private apixuService: ApixuService,
    private graphService: GraphsService,
    ) {
    this.titleService.setTitle('AgroSmart - DashBoard');
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

    const today = new Date();
    const back = new Date();
    back.setDate(back.getDate() - 10);

    this.graphService.getDayAverageData().subscribe(data => {
      this.bigChart = data.bundle[0].sensorGraph;
      this.bigChart[0].data.slice(-10);
      this.bigChart[1].data.slice(-10);
      this.bigChart[2].data.slice(-10);
      this.bigChart[3].data.slice(-10);
      this.xdata = data.bundle[0].timeStamps;
      this.xdata.slice(-10);
      this.title = 'Day Average Plot';
      this.subtitle = 'Plot: Environmental parameters vs Day average';
      console.log('Updated');
    });
  }
}
