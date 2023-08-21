import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-choice-picker',
  templateUrl: './choice-picker.component.html',
  styleUrls: ['./choice-picker.component.scss']
})
export class ChoicePickerComponent {
  @ViewChild('textarea', { static: true }) textarea!: ElementRef;
  tagsEl!: HTMLElement;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.tagsEl = this.renderer.createElement('div');
    this.renderer.setAttribute(this.tagsEl, 'id', 'tags');
    this.renderer.appendChild(this.textarea.nativeElement.parentElement, this.tagsEl);

    this.textarea.nativeElement.focus();

    this.renderer.listen(this.textarea.nativeElement, 'keyup', (e) => {
      this.createTags(e.target.value);

      if (e.key === 'Enter') {
        setTimeout(() => {
          e.target.value = '';
        }, 10);

        this.randomSelect();
      }
    });
  }

  createTags(input: string) {
    const tags = input.split(',')
      .filter(tag => tag.trim() !== '')
      .map(tag => tag.trim());

    this.renderer.setProperty(this.tagsEl, 'innerHTML', '');

    tags.forEach(tag => {
      const tagEl = this.renderer.createElement('span');
      this.renderer.addClass(tagEl, 'tag');
      this.renderer.setProperty(tagEl, 'textContent', tag);
      this.renderer.appendChild(this.tagsEl, tagEl);
    });
  }

  randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
      const randomTag = this.pickRandomTag();

      this.highlightTag(randomTag);

      setTimeout(() => {
        this.unHighlightTag(randomTag);
      }, 100);

    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = this.pickRandomTag();

        this.highlightTag(randomTag);
      }, 100);

    }, times * 100);
  }

  pickRandomTag() {
    const tags = this.tagsEl.querySelectorAll('.tag');
    const randomIndex = Math.floor(Math.random() * tags.length);
    return tags[randomIndex];
  }

  highlightTag(tag: any) {
    this.renderer.addClass(tag, 'highlight');
  }

  unHighlightTag(tag: any) {
    this.renderer.removeClass(tag, 'highlight');
  }
}
