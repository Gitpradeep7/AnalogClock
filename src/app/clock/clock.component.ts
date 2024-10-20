import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  @ViewChild('h') hour: any;
  @ViewChild('s') secc: any;
  @ViewChild('m') minn: any;
  dd = new Date();
  constructor(){};
  ngOnInit() {
    setInterval(() => {
      this.dd = new Date();
      let min = this.dd.getMinutes();
      let hr = this.dd.getHours();
      let sec = this.dd.getSeconds();
      hr = hr > 12 ? hr -= 12 : hr;
      this.hour.nativeElement.setAttribute("style", "transform: rotate(" + (hr * 30 + Math.floor(min / 2)) + "deg)");
      this.secc.nativeElement.setAttribute("style", "transform: rotate(" + sec * 6 + "deg)");
      this.minn.nativeElement.setAttribute("style", "transform: rotate(" + min * 6 + "deg)");
    }, 1000);

  }
  // runTime() {
  // }
}
