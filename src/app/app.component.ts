import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedbackComponent} from "./shared/feedback/feedback.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cool-apps';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    setTimeout(() => this.openFeedback(), 15000);
  }

  openFeedback() {
    this.dialog.open(FeedbackComponent, {
      disableClose: true,
      hasBackdrop: true
    });
  }
}
