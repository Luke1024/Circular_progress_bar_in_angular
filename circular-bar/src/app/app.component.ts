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
    percentage:100,
    animationTimeS:1,
    centerColor:"white",
    barColor:"brown",
    progressTextColor:"dark",
    backgroundColor:"white"
  } as BarConfig;
}
