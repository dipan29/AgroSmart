import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SetupService } from '../setup.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router, private setup: SetupService, private cookieService: CookieService) { }

  ngOnInit() {

  }

  setupNode(event) {
    event.preventDefault();
    const target = event.target;
    const deviceID = target.querySelector('#deviceID').value;
    const propertyID = this.cookieService.get('propertyId');

    this.setup.setNodeDetails( propertyID, deviceID ).subscribe(data => {
      if(data.success){
        window.alert(data.message)
      } else {
        window.alert(data.message)
      }
    });
  }
}
