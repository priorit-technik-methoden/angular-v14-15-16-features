import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[hover]',
})
export class HoverDirective {
  #el = inject(ElementRef);
  #prevBorder = '';

  @Input() borderColor: string = 'red';

  @Output() hovered = new EventEmitter<void>();

  @HostListener('mouseenter') onMouseEntered() {
    this.hovered.emit();
    this.#prevBorder = this.#el.nativeElement.style.border;
    this.#el.nativeElement.style.border = '3px solid ' + this.borderColor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.#el.nativeElement.style.border = this.#prevBorder;
  }
}
