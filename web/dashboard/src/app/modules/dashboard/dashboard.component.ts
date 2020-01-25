import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = []

  constructor(private titleService:Title, private dashBoardService:DashboardService) {
    this.titleService.setTitle("AgroSmart - DashBoard");
  }

  ngOnInit() {
    this.bigChart = this.dashBoardService.bigChart();
    console.log(this.bigChart);
  }

}
