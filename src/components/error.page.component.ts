import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'page-error',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  providers: [],
  template: `<h1>Fehler. Keine Berechtigung.</h1><p>Auth wird zufällig ermittelt, weg und zurück navigieren um RouteGuard erneut zu triggern.</p>`,
})
export class PageErrorComponent {}
