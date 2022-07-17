import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { map, filter, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  data$: Observable<any>;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => params["locationName"]),
      filter(name => !!name),
      concatMap(name => this.weatherService.getWeatherForCity(name))  //concat map 
    );
  }

  this.data$ = this.route.params.pipe(
    map(params => params["locationName"]),
    filter(name => !!name),
    tap(() => {
      this.loading = true;
    }),
    concatMap(name => this.weatherService.getWeatherForCity(name)),
    tap(() => {
      this.loading = false;
    })
);

 getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get(path).pipe(
      map(data => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
      delay(500)
    );
  }

  this.cities$ = this.countryControl.valueChanges.pipe(
    map(country => country.cities)
);
}