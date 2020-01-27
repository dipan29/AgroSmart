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
      // this.prop2 = data;
      // console.log(this.prop2);
    });
  }

  routeClick() {
    this.router.navigateByUrl('/setup/config');
  };

}
