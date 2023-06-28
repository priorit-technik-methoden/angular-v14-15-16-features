import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'call-other-api',
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [],
  template: `<p>Ich rufe eine fremde API auf und warte auf den HTTP Interceptor ... siehe Konsole Output</p>
    {{ someData$ | async }}
  `,
})
export class CallOtherApiComponent {
  #http = inject(HttpClient);

  protected someData$: Observable<any> = this.#http.get(
    'https://stapi.co/api//v1/rest/character?uid=CHMA0000226466'
  );
}
