import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';
import { BarConfig } from '../bar-config';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @Input() barConfig:BarConfig = {
    percentage:75,
    animationTimeS:5,
    fps:60,
    centerColor:"white",
    barColor:"red",
    progressTextColor:"red",
    backgroundColor:"white"
  } as BarConfig;;

  constructor() { }

  @HostBinding("style.--leftrotation") leftrotation:string = "0deg";
  @HostBinding("style.--rightrotation") rightrotation:string = "0deg";
  @HostBinding("style.--blockerzindex") blockerzindex:number = 4;
  @HostBinding("style.--centercolor") centercolor:string = this.barConfig.centerColor;
  @HostBinding("style.--barcolor") barcolor:string = this.barConfig.barColor;
  @HostBinding("style.--textcolor") textcolor:string = this.barConfig.progressTextColor;
  @HostBinding("style.--blockercolor") blockercolor:string = this.barConfig.backgroundColor;

  progress:string = ""

  percentage:number = 0;
  barAngle:number = 0;

  leftHalfCircleAngle:number = 0;

  interval = 20

  ngOnInit(): void {
    this.bindCustomValue();
    this.computeFrameTime();
    setInterval(() => {
      if(this.percentage<this.barConfig.percentage){
        this.percentage++;
      }
      this.computeBarAngle(this.percentage);
      this.setPercentage(this.percentage);
      this.setBarAngle(this.barAngle);
    },this.interval)
  }

  private bindCustomValue(){
    this.centercolor = this.barConfig.centerColor;
    this.barcolor = this.barConfig.barColor;
    this.textcolor = this.barConfig.progressTextColor;
    this.blockercolor = this.barConfig.backgroundColor;
  }

  private computeFrameTime(){
    this.interval = (this.barConfig.animationTimeS/this.barConfig.percentage)*1000;
  }

  private computeBarAngle(percentage:number){
    this.barAngle = percentage * 3.6;
  }

  private setPercentage(percentage:number){
    this.progress = percentage + "%";
  }

  private setBarAngle(angle:number){
    if(angle <= 360 && angle >= 0){
      this.setAngle(angle)
    }
  }

  private setAngle(angle:number){
    if(this.barAngle <= 180){
      this.moveLeftHalfCircle(angle);
      this.moveRightHalfCircle(angle);
      this.setRightVisible(false);
    } else {
      this.moveLeftHalfCircle(180);
      this.moveRightHalfCircle(angle);
      this.setRightVisible(true);
    }
  }

  private moveLeftHalfCircle(angle:number){
    this.leftrotation = angle + "deg";
  }

  private moveRightHalfCircle(angle:number){
    this.rightrotation = angle + "deg";
  }

  private setRightVisible(visible:boolean){
    if(visible){
      this.blockerzindex = 2;
    } else {
      this.blockerzindex = 5;
    }
  }
}
