import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements AfterViewInit {
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  @ViewChild('container') container!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('minute') minute!: ElementRef;
  @ViewChild('time') time!: ElementRef;
  @ViewChild('date') date!: ElementRef;
  @ViewChild('hour') hour!: ElementRef;
  mode: string = 'Dark Mode';

  ngAfterViewInit() {
    setInterval(() => {
      this.setTime();
    }, 1000);
  }

  setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';


    this.hour.nativeElement.style.transform = `
        translate(-50%, -100%) rotate(${this.scale(hoursForClock, 0, 11, 0, 360)}deg)
    `
    this.minute.nativeElement.style.transform = `
        translate(-50%, -100%) rotate(${this.scale(minutes, 0, 59, 0, 360)}deg)
    `
    this.second.nativeElement.style.transform = `
        translate(-50%, -100%) rotate(${this.scale(seconds, 0, 59, 0, 360)}deg)
    `

    this.time.nativeElement.innerHTML = `${hoursForClock}:${minutes < 0 ? `0${minutes}` : minutes} ${ampm}`;
    this.date.nativeElement.innerHTML = `${this.days[day]}, ${this.months[month]}, <span class="circle">${date}</span>`

  }

  scale(num: number, in_min: number, in_max: number, out_min: number, out_max: number) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  modeSelect() {
    const html = this.container.nativeElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      this.mode = 'Dark mode';
    } else {
      html.classList.add('dark');
      this.mode = 'Light mode';
    }
  }
}
