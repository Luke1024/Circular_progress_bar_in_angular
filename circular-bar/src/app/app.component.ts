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
    centerColor:"rgb(150,150,150)",
    barColor:"brown",
    progressTextColor:"rgba(0,0,0,0.8)",
    backgroundColor:"rgb(30,30,30)",
    fadeInTimeS:2,
    fadeInDelayS:1
  } as BarConfig;
}
