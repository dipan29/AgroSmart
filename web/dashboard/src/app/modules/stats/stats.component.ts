import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GraphsService } from '../graphs.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  // Graph Details
  seriesChart = [];
  xdata = [];
  title: string;
  subtitle: string;

  constructor(
    private titleService: Title,
    private graphService: GraphsService
  ) {
    this.titleService.setTitle('AgroSmart - Status');
  }

  ngOnInit() {
    this.graphService.getDayAverageData().subscribe(data => {
      data.bundle.forEach(datum => {
        this.seriesChart.push(datum.sensorGraph);
        this.xdata.push(datum.timeStamps);
      });
    });
  }


}
