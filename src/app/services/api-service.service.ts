import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherInterface } from '../interfaces/weather-interface';
import { environment as env } from 'src/environments/environment';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  constructor(private http : HttpClient) { 
     
  }
  doGetIdOfCountry(id:any ):Observable<WeatherInterface[]>{
  return this.http.get<WeatherInterface[]>(`${env.apiLinkTwo}`  + id )

  }

}