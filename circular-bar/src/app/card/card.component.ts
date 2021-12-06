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

  @HostBinding("style.--background") background:string="";

  ngOnInit(): void {
    this.background = this.barConfig.backgroundColor;
  }

}
