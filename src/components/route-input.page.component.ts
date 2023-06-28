import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'page-route-inputs',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `
    <h1>Wert an Input über Route übergeben.</h1>
    Suchbegriff aus Url: {{ searchTerm }}
  `,
})
export class PageRouteInputComponent {
  @Input() searchTerm: string = '';
}
