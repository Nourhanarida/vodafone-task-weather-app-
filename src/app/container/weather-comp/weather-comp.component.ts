import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherInterface } from 'src/app/interfaces/weather-interface';
// import { Model } from 'src/app/interfaces/model';
// import { filter, map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
// import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-weather-comp',
  templateUrl: './weather-comp.component.html',
  styleUrls: ['./weather-comp.component.css']
})
export class WeatherCompComponent implements OnInit {

  
 //for datePicker
//  model: NgbDateStruct;
  //total
  items :any
  newDate : any
  date :any
  tempCel :number
  tempFeh :number
  humidity : number
  cities :string[]


  // for dropdown
  celsius : boolean ;
  fehr : boolean ;

// for form 
filtering :any;
public weatherData:any | [];
myForm  = new FormGroup({
  cityId: new FormControl(''),
 })


  constructor(private apiserv : ApiServiceService) { 
   
  }

   
 
   tempInCels(){
    this.celsius = true;
    this.fehr = false;
   }
  tempInFehr(){
  this.fehr = true;
  this.celsius = false
  }
  onDateSelection(date :any){
    this.newDate = date.year + '-' + date.month + '-'+ date.day
  }

  ngOnInit(): void {
    this.celsius = true;

    }

onSubmit(form:FormGroup) {

  // this.apiserv.doGetIdOfCountry(form.value.cityId).subscribe(data => {
  //    this.weatherData = data;
       
  // });

  this.apiserv.doGetIdOfCountry(form.value.cityId).subscribe(data  => {
    this.weatherData = data;
  
           this.items = this.weatherData.forecast;
          this.items.forEach( (ele :any) => {
            if( this.newDate == ele.date ){

              this.date = ele.date ;
              this.tempCel = ele.temperatureCelsius;
               this.tempFeh = ele.temperatureFahrenheit;
                this.humidity = ele.humidity
            
            }
          })
        });
  
  

   
  //    for (const key in this.weatherData) {
  //     console.log(this.weatherData[key].city)

  //     // formValues.cityId == this.weatherData[key]
  //     // console.log(this.weatherData[key])
  //     if(formValues.cityId === this.weatherData[key]){
         
  //          formValues.cityId = 8
  //         // console.log(formValues.cityId)
  //         console.log(this.weatherData[key])

  //     }
  //     // else{
  //     //  console.log('this city not found')
  //     //   // console.log(formValues.cityId)
  //     //   // console.log(formValues)
        

  //     // }
    
  //     // console.log(`${key}: ${this.weatherData[key]}`);
  // }
  // this.onDateSelection;
}


}






