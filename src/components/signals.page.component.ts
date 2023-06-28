import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'page-signals',
  imports: [NgFor, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    label { font-size: 0.75em; font-weight: bold; display: block;}
    span { padding-right: 1em; }
  `,
  ],
  template: `
    <h1>Signals</h1>

    <p>Auf der Konsole wird bei beiden ausgewählten Dropdowns und Änderungen dazu der Seiteneffekt simuliert (z.B. neue Reisedaten geladen)</p>

    <label for="locationFrom">Von:</label>
    <select id="locationFrom" name="locationFrom" (change)="onLocationFromSelected($event)">
      <option value="">Bitte auswählen</option>
      <option *ngFor="let city of cities">{{ city }}</option>
    </select>

    <br /><br />

    <label for="locationTo">Nach:</label>
    <select id="locationTo" name="locationTo" (change)="onLocationToSelected($event)">
    <option value="">Bitte auswählen</option>  
    <option *ngFor="let city of cities">{{ city }}</option>
    </select>

    <section *ngIf="bothSelected()">
      <h2>Suchergebnis Reiseunternehmen</h2>
      <p><small>{{ journey() }}</small></p>
      <p>
        <ng-container *ngFor="let c of availableCompanies()">
          <span>{{ c }}</span>
        </ng-container>
      </p>
    </section>
    
    <br /><br />
    <hr />
    <br /><br />
    <h2>Set, Update, Mutate</h2>

    Value: {{ numberValue() }}
    <br /><br />
    <button (click)="add()">+</button>
    <button (click)="substract()">-</button>
    <button (click)="numberValue.set(27)">set to 27</button>
  `,
})
export class PageSignalsComponent {
  readonly companies = [
    'Wanderlust Adventures',
    'Dreamscape Travels',
    'Globe Trotters',
    'Destinations Unlimited',
    'Voyage Vista',
    'Roaming Rendezvous',
    'Journey Junction',
    'Wander Wise',
    'Escape Express',
    'Wanderlust Wanderers',
  ];

  readonly cities = [
    'Amsterdam',
    'Barcelona',
    'Berlin',
    'Dublin',
    'London',
    'Paris',
    'Prague',
    'Rome',
    'Vienna',
    'Zurich',
  ];

  protected numberValue = signal<number>(0);

  protected locationFrom = signal('');
  protected locationTo = signal('');
  protected bothSelected = computed<boolean>(
    () => this.locationFrom() !== '' && this.locationTo() !== ''
  );
  protected availableCompanies = signal<string[]>([]);

  protected journey = computed(
    () => 'von ' + this.locationFrom() + ' nach ' + this.locationTo()
  );

  constructor() {
    effect(
      () => {
        if (this.bothSelected() === true) {
          console.log(
            'do some async stuff with the selected values',
            this.locationFrom(),
            this.locationTo()
          );
          this.availableCompanies.set(this.getRandomTravelAgencies());
        }
      },
      { allowSignalWrites: true }
    );
  }

  protected onLocationFromSelected(event: any) {
    this.locationFrom.set(event.target.value);
  }

  protected onLocationToSelected(event: any) {
    this.locationTo.set(event.target.value);
  }

  private getRandomTravelAgencies(): string[] {
    const selectedAgencies: string[] = [];
    // Randomly select 1 to 5 companies
    const numCompanies = Math.floor(Math.random() * 5) + 1;

    while (selectedAgencies.length < numCompanies) {
      const randomIndex = Math.floor(Math.random() * this.companies.length);
      const selectedAgency = this.companies[randomIndex];

      if (!selectedAgencies.includes(selectedAgency)) {
        selectedAgencies.push(selectedAgency);
      }
    }

    return selectedAgencies;
  }

  protected add() {
    this.numberValue.update((v) => v + 1);
  }

  protected substract() {
    this.numberValue.update((v) => v - 1);
  }

  protected mutate() {
    // makes not much sense in this case
  }
}
