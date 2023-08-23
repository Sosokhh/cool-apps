import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-drink-water',
  templateUrl: './drink-water.component.html',
  styleUrls: ['./drink-water.component.scss']
})
export class DrinkWaterComponent implements AfterViewInit {
  @ViewChild('liters') litersRef!: ElementRef;
  @ViewChild('percentage') percentageRef!: ElementRef;
  @ViewChild('remained') remainedRef!: ElementRef;

  smallCups: boolean[] = Array(8).fill(false);
  totalCups = this.smallCups.length;
  goalLiters = 2;

  ngAfterViewInit() {
    this.updateBigCup();
  }

  highlightCups(idx: number): void {
    this.smallCups = this.smallCups.map((cup, idx2) => (idx2 <= idx));
    this.updateBigCup();
  }

  updateBigCup(): void {
    const fullCups = this.smallCups.filter(cup => cup).length;

    if (fullCups === 0) {
      this.percentageRef.nativeElement.style.visibility = 'hidden';
      this.percentageRef.nativeElement.style.height = 0;
    } else {
      this.percentageRef.nativeElement.style.visibility = 'visible';
      this.percentageRef.nativeElement.style.height = `${(fullCups / this.totalCups) * 330}px`;
      this.percentageRef.nativeElement.innerText = `${(fullCups / this.totalCups) * 100}%`;
    }

    if (fullCups === this.totalCups) {
      this.remainedRef.nativeElement.style.visibility = 'hidden';
      this.remainedRef.nativeElement.style.height = 0;
    } else {
      this.remainedRef.nativeElement.style.visibility = 'visible';
      this.litersRef.nativeElement.innerText = `${this.goalLiters - (0.25 * fullCups)}L`;
    }
  }
}

