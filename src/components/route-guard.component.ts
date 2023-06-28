import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'page-route-guard',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `
  <h1>Route Guard Test</h1>
  <p>This time it worked ... auth is gotten by random true / false. Switch back and return to trigger RouteGuard again.</p>
  `,
})
export class PageRouteGuardComponent {}
