import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  @ViewChildren('divUnhappy, divNeutral, divSatisfied') ratingDivs!: QueryList<ElementRef>;
  clicked: boolean = false;
  selectedRating: string = 'Satisfied';

  constructor(private dialogRef: DialogRef<FeedbackComponent>) {
  }

  selectRating(rating: string, div: HTMLDivElement) {
    if (div.classList.contains('rating')) {
      this.removeActive();
      div.classList.add('active');
      this.selectedRating = rating;
    }
  }

  removeActive() {
    this.ratingDivs.forEach(div => {
      div.nativeElement.classList.remove('active');
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}
