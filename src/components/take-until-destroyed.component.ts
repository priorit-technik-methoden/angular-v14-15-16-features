import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  standalone: true,
  selector: 'take-until-destroyed',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `Es wird mit dem interval RxJS Operator ein Observable erstellt, dass sekündlich hochzählt, mittels takeUntilDestroyed automatisch gestoppt wird und es wird 'subscribed' und die aktuelle Zahl auf der Konsole ausgegeben. Auf einen anderen Menüpunkt wechseln und man sieht, dass der Zahlen-Stream auf der Konsole endet.`,
})
export class TakeUntilDestroyedComponent {
  counter$ = interval(1000).pipe(takeUntilDestroyed());

  constructor() {
    this.counter$.subscribe(console.log);
  }
}
