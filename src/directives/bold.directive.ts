import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[bold]',
})
export class BoldDirective {
  el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
