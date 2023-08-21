import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-background-boxes',
  templateUrl: './background-boxes.component.html',
  styleUrls: ['./background-boxes.component.scss']
})
export class BackgroundBoxesComponent implements AfterViewInit{
  @ViewChild('boxesContainer', { static: true }) boxesContainer!: ElementRef;
  isBig: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.createBoxes()
  }

  onToggle() {
    this.isBig = !this.isBig;
  }

  public createBoxes() {
    console.log(this.boxesContainer)
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = this.renderer.createElement('div');
        this.renderer.addClass(box,'box');
        this.renderer.setStyle(box, 'background-position', `-${j * 125}px -${i * 125}px`);
        this.boxesContainer.nativeElement.appendChild(box);
      }
    }
  }
}
