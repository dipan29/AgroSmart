import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

interface nodeData {
  message: string,
  nodeDetails: any
}

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  getData() {
    var propertyID = this.cookieService.get('propertyId');
    //var propertyID = "6-YaNQcL";
    if(propertyID) {
      console.log("Data for Property ID -  " + this.cookieService.get('propertyId'));
      return this.http.post<nodeData>('/api/graphs/data', {
        propertyID
      })
    } 
  }
  
}
