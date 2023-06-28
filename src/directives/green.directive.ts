import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[green]',
})
export class GreenDirective {
  private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.color = 'green';
  }
}
