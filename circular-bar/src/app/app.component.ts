import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';
import { BarConfig } from './bar-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'circular-bar';

  config = {
    percentage:65,
    animationTimeS:2,
    centerColor:"rgb(50,50,50)",
    barColor:"brown",
    progressTextColor:"white",
    backgroundColor:"rgb(50,50,50)",
    fadeInTimeS:2,
    fadeInDelayS:1
  } as BarConfig;
}
