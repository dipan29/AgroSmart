import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.scss']
})
export class DataChartsComponent implements OnInit {

  chartOptions: {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Weekly Average Temperature'
      },
      subtitle: {
        text: 'for the Month of January 2020'
      },
      xAxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      credits: {
        text: '(C) AgroSmart 20-21 | All Rights Reserved',
        href: 'http://agrosmart.ml'
      },
      exporting: {
        enabled: true
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Node 1 - ESP 32',
        data: [13.36, 14.20, 16.05, 14.5, 15.2]
      }, {
        name: 'Node 2 - ESP 8266',
        data: [13.45, 14.2, 15.9, 14.70, 15.4]
      }, {
        name: 'Node 3 - ESP 32',
        data: [13.22, 14.28, 16.1, 14.65, 15.29]
      }, {
        name: 'Controller 1',
        data: [13.30, 14.12, 15.95, 14.5, 15.35]
      }]
    };
    HC_exporting(Highcharts);
  }

}
