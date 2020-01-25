import { Component, OnInit, Input } from '@angular/core';
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
  @Input() data: any = [];

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
      series: this.data
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
