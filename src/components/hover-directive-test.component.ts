import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HoverDirective } from '../directives/hover.directive';

@Component({
  standalone: true,
  selector: 'hover-directive-test',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  hostDirectives: [
    {
      directive: HoverDirective,
      inputs: ['borderColor: bcol'],
      outputs: ['hovered: mouseover'],
    },
  ],
  template: `Gleiche Funktionalität wie oben nur als eigene Komponente, die mittels HostDirectives die HoverDirective hinzufügt, und dessen Input und Output "exposed" und jeweils einen Alias für I/O vergibt.`,
})
export class HoverDirectiveTestComponent {}
