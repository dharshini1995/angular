import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  name='Priya'
  num1=10;
  num2=10;
  num3=5;
  num4=8;


  displayDate= function(){

    return new Date();
  }
}
