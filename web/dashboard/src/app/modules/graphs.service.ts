import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

interface GraphData {
  bundle: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class GraphsService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  getDayAverageData() {
    const propertyID = this.cookieService.get('propertyId') || '6-YaNQcL';
    if (propertyID) {
      console.log('Data for Property ID - ' + this.cookieService.get('propertyId'));
      return this.http.post<GraphData>('/api/graphs/data', {
        propertyID
      });
    }
  }

  getNodeData(parameter, startDate, endDate) {
      const ygraph = [];
      const xgraph = [];
      this.getDayAverageData().subscribe(data => {
        ygraph.push(data[0].sensorGraph);
        xgraph.push(data[0].timeStamps);
        console.log(ygraph[0]);
        console.log(xgraph[0]);
      });
      console.log('Printing Data');

      return [ygraph[0], xgraph[0]];
  }


}
