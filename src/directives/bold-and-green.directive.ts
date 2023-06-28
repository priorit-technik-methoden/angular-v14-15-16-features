import { Directive } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { GreenDirective } from './green.directive';

@Directive({
  standalone: true,
  selector: '[greenAndBold]',
  hostDirectives: [GreenDirective, BoldDirective],
})
export class GreenAndBoldDirective {}
