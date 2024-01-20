import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCompComponent } from './container/weather-comp/weather-comp.component';

const routes: Routes = [
  {path:'',component:WeatherCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
