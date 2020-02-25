import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

interface getData {
  message: string,
  nodeDetails: any
}

interface nodeData {
  deviceIDs: string,
  dataSets: string
}


@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  nodeData = [];

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  getData() {
    var propertyID = this.cookieService.get('propertyId');
    //var propertyID = "6-YaNQcL";
    if (propertyID) {
      console.log("Data for Property ID -  " + this.cookieService.get('propertyId'));
      return this.http.post<getData>('/api/graphs/data', {
        propertyID
      })
    }
  }

  getNodeData(parameter, startDate, endDate) {
    var deviceIDs = []; var dataSets = [];
    this.getData().subscribe(data => {
      //console.log("Called Graph Service. " + parameter + " Start Date : " + startDate + " End Date : " + endDate);
      if (data.message) {
        this.nodeData = data.nodeDetails;
        //console.log(this.nodeData);
        //console.log("Extracting Layer Data");
        var x: any;
        
        var newData: Object = this.nodeData;
        newData = newData[0];
        //console.log(newData);
        for (x in newData) {
          let y: any;
          var deviceID = newData[x].deviceID;
          deviceIDs.push(deviceID);
          var paramsValue = []; var values = []; var dates = [];
          var objData = newData[x].sensorData;
          var datePointer;
          //var count = Object.keys(objData).length;
          var count = 0, k = 0;
          datePointer = objData[0].timeStamp.substring(0, 10);
          //console.log(datePointer);
          for (y in objData) {
            var value;
            var temp = objData[y].temp; //for null testing
            var date = objData[y].timeStamp.substring(0, 10);
            //console.log("inner " + date);
            if (parameter == "Temperature")
              value = objData[y].temp;
            else if (parameter == "Solar Intensity")
              value = objData[y].solarIntensity;
            else if (parameter == "Water Level")
              value = objData[y].waterLevel;
            else if (parameter == "Humidity")
              value = objData[y].humidity;
            else if (parameter == "Moisture")
              value = objData[y].moisture;

            var time = objData[y].timeStamp;
            if ((time >= startDate) && (time <= endDate)) {
              if (temp) {
                // count++;
                // k += value
                // paramsValue.push(value);
                if (datePointer == date) {
                  //console.log("Validiyy");
                  count++;
                  k += value;
                } else {
                  values.push(k / count);
                  dates.push(datePointer);
                  datePointer = date;
                  count = 1;
                  k = value;
                }
              }
            }
            //console.log(parameter + " " + value + " Time : " + time);
          }
          values.push((k / count).toPrecision(4));
          dates.push(datePointer);
          count = 0; k = 0;

          //console.log({ deviceID, values, dates } );
          var dataSet = { values, dates };
          dataSets.push(dataSet);

          //console.log(parameter + " of " + deviceID + " - " + values.toString() + " - " + dates.toString());
          //console.log("Total Values " + paramsValue.toString() + " | " + paramsValue.length);
        }
        //console.log("Return Channel");
        //console.log({ deviceIDs, dataSets });
      }
    });
    return [{ deviceIDs, dataSets }];
  }

}
