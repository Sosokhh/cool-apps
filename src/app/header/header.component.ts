import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('nav') nav!: ElementRef;
  isNavActive: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const nav = this.nav.nativeElement;
    if (nav) {
      this.isNavActive = window.scrollY > nav.clientHeight + 150;
    }
  }

}
