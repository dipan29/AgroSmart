import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  //constructor() { }

  ngOnInit() { }

  sideBarToogler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private titleService:Title) {
    this.titleService.setTitle("AgroSmart - DashBoard");
  }

}
