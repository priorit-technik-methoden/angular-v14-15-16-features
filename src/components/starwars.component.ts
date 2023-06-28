import { AsyncPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  map,
  merge,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  standalone: true,
  selector: 'starwars',
  imports: [AsyncPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`button { margin-left: 2em; }`],
  template: `
    Starwars Person: 
      <span>{{ randomPerson$ | async }}</span> 
      <span *ngIf="(loading$ | async) === true">...laden...</span> 
      <button (click)="action$.next()">zufällige Person laden</button>
  `,
})
export class StarwarsComponent {
  // the http client to make http calls
  private httpClient = inject(HttpClient);
  // the action subject will be nexted on button click and therefore can be piped
  protected action$: Subject<void> = new Subject();
  // the loading behavior subject will tell us if a person is currently loading
  protected loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // the random person observable is piped from the action stream, thus will be evaluated on every button click
  // we create a simple initial value with of and merge the 2 streams together
  protected randomPerson$: Observable<string> = merge(
    of('-') /* this is stream 1, our initial value */,
    this.action$.pipe(
      /* this is stream 2, piped from our action stream */
      tap(() =>
        this.loading$.next(true)
      ) /* when we start we set loading to true */,
      switchMap(() =>
        /* if an http call is active, switchmap will end it and make the new one */
        this.httpClient
          .get<any>(
            'https://swapi.dev/api/people/' + Math.floor(Math.random() * 50)
          )
          .pipe(
            map(
              (result) => result.name
            ) /* we want only the name, so we map our result accordingly */,
            catchError(
              () => 'Ladefehler'
            ) /* on error we want the string 'Ladefehler' to be returned */,
            finalize(() =>
              this.loading$.next(false)
            ) /* when we are finished with our http call (also on error), we set loading to false again */
          )
      )
    )
  );
}
