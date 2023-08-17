import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss']
})
export class DragNDropComponent {

  dragStart(event: DragEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('hold');
    setTimeout(() => target.classList.add('invisible'), 0);
  }

  dragEnd(event: DragEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('hold', 'invisible');
  }

  dragOver(event: DragEvent) {
    event.preventDefault();
  }

  dragEnter(event: DragEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('hovered');
  }

  dragLeave(event: DragEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('hovered');
  }

  dragDrop(event: DragEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    target.classList.remove('hovered');
    target.classList.add('empty');

    const fillElement = document.querySelector('.fill');
    if (fillElement) {
      target.appendChild(fillElement);
    }
  }
}
