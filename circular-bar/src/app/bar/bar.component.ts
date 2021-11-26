import { Component, Host, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  @HostBinding("style.--leftrotation") leftrotation:string = "0deg";
  @HostBinding("style.--rightrotation") rightrotation:string = "0deg";
  //starting 4 with progress switch to 1
  @HostBinding("style.--blockerzindex") blockerzindex:number = 4;
  @HostBinding("style.--centercolor") centercolor:string = "white";
  @HostBinding("style.--barcolor") barcolor:string = "blue";
  @HostBinding("style.--blockercolor") blockercolor:string = "white";

  percentage:number = 0;
  barAngle:number = 0;

  leftHalfCircleAngle:number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.barAngle++;
      this.setBarAngle(this.barAngle);
    },20)
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
      this.blockerzindex = 1;
    } else {
      this.blockerzindex = 4;
    }
  }
}
