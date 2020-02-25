import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-data-charts',
  templateUrl: './data-charts.component.html',
  styleUrls: ['./data-charts.component.scss']
})
export class DataChartsComponent implements OnInit {

  @Input() data: any = [];
  @Input() xdata: any = [];
  @Input() ytitle: string;
  @Input() title: string;
  @Input() subtitle: string;

  updateFlag = false;
  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: this.title || 'Average Data'
    },
    subtitle: {
      text: this.subtitle || 'For the Month of January 2020'
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    xAxis: {
      categories: this.xdata
    },
    yAxis: {
      title: {
        text: this.ytitle || 'Parametric Value'
      }
    },
    credits: {
      text: '(C) AgroSmart 20-21 | All Rights Reserved',
      href: 'http://agrosmart.tech'
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

  Highcharts = Highcharts;

  ngOnChanges() {
    this.chartOptions.series = this.data;
    this.chartOptions.xAxis.categories = this.xdata;
    this.chartOptions.title.text = this.title;
    this.chartOptions.subtitle.text = this.subtitle;
    this.chartOptions.yAxis.title.text = this.ytitle;

    console.log('Data changed from Input');
    this.updateFlag = true;
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
