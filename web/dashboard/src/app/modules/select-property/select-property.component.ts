import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from '../setup.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-select-property',
  templateUrl: './select-property.component.html',
  styleUrls: ['./select-property.component.scss']
})
export class SelectPropertyComponent implements OnInit {

  properties: any;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private Setup: SetupService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const adminName = 'dipanroy12@gmail.com';
    this.Setup.getProperties(adminName).subscribe(data => {
      this.properties = data["propertyDetails"]["0"];
    });
  }

  routeClick() {
    this.router.navigateByUrl('/setup/config');
  };

  setupApp(event) {
    event.preventDefault();
    const target = event.target;
    const propertyId = target.querySelector('#propertyId').value;
    const controllerId = target.querySelector('#controllerId').value;

    const dateNow = new Date();
    dateNow.setDate(dateNow.getDate() + 180);
    this.cookieService.delete('propertyId');
    this.cookieService.set('propertyId', propertyId, dateNow);
    this.cookieService.set('controllerId', controllerId, dateNow);

    this.Setup.setupController(propertyId, controllerId).subscribe(data => {
      if(data.success) {
        //var controllerId = data.controllerId.valueOf();
        console.log("Controller Attached. ID - " + controllerId);
        this.router.navigate([''])
      } else {
        window.alert("Some error occured! Please try again later.")
      }
    })

  }

}
