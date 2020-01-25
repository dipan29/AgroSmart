import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=1c8a0ab1a2b74a85182ff799b24932a1&query=' + location
    );
  }
  getAirQuality(location){
    return this.http.get(
      'http://api.waqi.info/feed/'+ location + '/?token=7cc2cc0a80ff18f1ac5387c27d6d83f051999a5b'
    )
  }
  getAirQualityL(latitude, longitude){
    return this.http.get(
      'http://api.waqi.info/feed/geo:'+ latitude + ';' + longitude + '/?token=7cc2cc0a80ff18f1ac5387c27d6d83f051999a5b'
    )
  }
}
