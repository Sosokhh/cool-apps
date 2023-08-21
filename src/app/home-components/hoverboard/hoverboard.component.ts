import {Component} from '@angular/core';

@Component({
  selector: 'app-hoverboard',
  templateUrl: './hoverboard.component.html',
  styleUrls: ['./hoverboard.component.scss']
})
export class HoverboardComponent {
  divArray = Array.from({length: 810});
  colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

  setColor(square: HTMLDivElement) {
    const color = this.getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  removeColor(square: HTMLDivElement) {
    square.style.background = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000';
  }

  private getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
