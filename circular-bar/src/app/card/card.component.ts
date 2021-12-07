import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BarConfig } from '../bar-config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() barConfig:BarConfig = {} as BarConfig;
  
  constructor() { }

  description = "Java"

  @HostBinding("style.--background") background:string="rgb(40,40,40)";
  @HostBinding("style.--description_blur_anime_delay") descriptionBlurAnimeDelay:string="1s";
  @HostBinding("style.--description_blur_anime_duration") descriptionBlutAnimeDuration:string="2s";
  @HostBinding("style.--card_anime_delay") cardAnimeDelay:string = "0s";
  @HostBinding("style.--card_anime_duration") cardAnimeDuration:string="2s";

  ngOnInit(): void {}


}
