import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sum',
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `
    {{ a }} + {{ b }} = {{ a + b }}
  `,
})
export class SumComponent {
  @Input({ required: true, alias: 'varA' }) a: number = 0;
  @Input({ required: true, alias: 'varB' }) b: number = 0;
}
