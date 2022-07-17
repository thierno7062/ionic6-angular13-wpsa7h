import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import { WeatherService } from './weather.service';
import { WeatherReportComponent } from './pages/weather-report.component';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,FormsModule, Router.forRoot(), IonicModule.forRoot() ],
  declarations: [ AppComponent, WeatherReportComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ WeatherService ],
    const routes: Routes = [
    {
      path: "",
      component: WeatherReportComponent
    },
    {
      path: ":locationName",
      component: WeatherReportComponent
    },
  ];
})
export class AppModule { }
