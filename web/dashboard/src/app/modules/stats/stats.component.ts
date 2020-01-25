import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  //constructor() { }

  ngOnInit() {
  }

  constructor(private titleService:Title) {
    this.titleService.setTitle("AgroSmart - Status");
  }

}
