import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component } from '@angular/core';
import { BarConfig } from './bar-config';
import { CardConfig } from './card-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'circular-bar';

  cardConfig = {
    description: "Java",
    textColor: "orange",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "2s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "1s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:65,
      animationTimeS:2,
      animationDelay:1,
      centerColor:"rgb(150,150,150)",
      barColor:"rgb(179, 116, 0)",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:2
    } as BarConfig,
  }  as CardConfig;

}
