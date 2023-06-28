import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SECRET_API_KEY } from '../tokens';

@Component({
  standalone: true,
  selector: 'page-lazy-loaded',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `<h1>Welcome to a lazy loaded component</h1><p>This is some content.</p><p>Secret API Key: {{ apiKey }}</p>`,
})
export class PageLazyLoadedComponent {
  apiKey = inject(SECRET_API_KEY);
}
