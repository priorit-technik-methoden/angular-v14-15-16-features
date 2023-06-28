import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HoverDirective } from '../directives/hover.directive';
import { GreenAndBoldDirective } from '../directives/bold-and-green.directive';
import { StarwarsComponent } from './starwars.component';
import { SumComponent } from './sum.component';
import { HoverDirectiveTestComponent } from './hover-directive-test.component';
import { TakeUntilDestroyedComponent } from './take-until-destroyed.component';
import { CallOtherApiComponent } from './call-other-api.component';

@Component({
  standalone: true,
  selector: 'page-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SumComponent,
    StarwarsComponent,
    GreenAndBoldDirective,
    HoverDirective,
    HoverDirectiveTestComponent,
    TakeUntilDestroyedComponent,
    CallOtherApiComponent,
  ],
  styles: [],
  template: `<h1>Home</h1><h2>Angular 14 / 15 / 16 Features</h2>

  <details>
    <summary>dependency injection mit inject</summary>
    <p>Siehe <em>app.routes.ts</em>: Provider für SECRET_API_KEY definieren und <em>components/lazy-loaded.page.component.ts</em> wo über die inject Methode die Dependency geholt wird oder in <em>components/starwars.component.ts</em>, wo der HttpClient mit inject geholt wird.</p>
    <p>Weiters wird in <em>components/starwars.component.ts</em> der HttpClient über die Inject Methode geholt.</p>
    <p>Inject wird auch im Route Guard in <em>app.routes.ts</em> verwendet, um den Router und den AuthService zu "injecten".</p>
    <p><starwars /></p>
  </details>

  <details>
    <summary>Self-Closing Tags</summary>
    Siehe Template in <em>components/app-root.component.ts</em>: Menu Component Tag, Router Outlet Tag oder <em>components/home.page.component.ts</em>: Sum Component Tag
  </details>

  <details>
    <summary>Seitentitel via Route</summary>
    <p>Siehe <em>app.routes.ts</em>. Seitentitel innerhalb StackBlitz eventuell mit DevTools überprüfen.</p>
  </details>

  <details>
    <summary>Standalone Komponenten</summary>
    <ul>
    <li>Alle Komponenten in diesem Projekt sind standalone</li>
    <li>Standalone Flag im @Component Decorator</li>
    <li>Dependencies über Imports im @Component Decorator (siehe z.B. <em>components/starwars.component.ts</em> oder über Route (siehe <em>app.routes.ts</em>)</li>
    <li>neuer Bootstrapping Prozess (siehe main.ts)</li>
    <li>provideHttpClient: siehe <em>main.ts</em> und die Verwendung des HttpClients in <em>components/starwars.component.ts</em></li>
    <li>Standalone Directives und Pipes: z.B. <em>components/starwars.component.ts</em> AsyncPipe</li>
  </ul>
  </details>

  <details>
    <summary>Functional Interceptors</summary>
    <p>Siehe <em>interceptors/test.interceptor.ts</em> und die Konfiguration in <em>main.ts</em></p>
    <call-other-api />
  </details>

  <details>
    <summary>Lazy-Loading von Komponenten</summary>
    <p>Siehe <em>app.routes.ts</em> PageLazyLoadedComponent, Pfad 'lazy-loaded'.</p>
  </details>

  <details>
    <summary>Directive Composition</summary>
    <p>Siehe alle Direktiven in <em>directives/</em>, sowie den Source dieses Abschnitts (Anwendung der Direktiven) in <em>components/home.page.component.ts</em>.</p>
    <p greenAndBold>Auf diesen Absatz wird die Green-Bold-Direktive appliziert, die die 2 einzelnen Direktiven als HostDirectives verwendet.</p>
    <p hover borderColor="green" (hovered)="logHovered('eins')">Auf diesen Absatz wird die Hover Direktive angewendet, der Input wird auf 'green' gesetzt, wenn der Output emitted, wird auf die Console geloggt.</p>
    <hover-directive-test bcol="yellow" (mouseover)="logHovered('zwei')" />
  </details>

  <details>
    <summary>Required Inputs <sup>(v16)</sup></summary>
    Siehe <em>components/sum.component.ts</em>: Required Input + Alias
    <p>Output SumComponent: <sum [varA]="5" [varB]="3" /></p>
  </details>

  <details>
    <summary>Input values via Route <sup>(v16)</sup></summary>
    <p>Siehe <em>main.ts</em> withComponentInputBinding() in provideRouter() und <em>components/route-input.page.component.ts</em>: routerLink und queryParams Attribute / Direktiven.</p>
  </details>

  <details>
    <summary>ngOptimizedImage</summary>
    <p>Siehe <em>components/images.page.component.ts</em>. Bild das "above the fold" priorisiert geladen wird, und Bild das "below the fold" lazy-loaded wird. Mit Image Loader Beispiel.<p>
  </details>

  <details>
    <summary>takeUntilDestroyed / injectable destroyRef <sup>(v16)</sup></summary>
    <p>Siehe <em>components/take-until-destroyed.component.ts</em></p>
    <take-until-destroyed />
  </details>

  <details>
    <summary>Dependencies über Route bereitstellen</summary>
    <p>Siehe <em>app.routes.ts</em> wo die Dependency "provided" wird und <em>components/lazy-loaded.page.component.ts</em> wo via inject die Dependency geholt wird.</p>
  </details>

  <details>
    <summary>Funktionale Route Guards</summary>
    <p>Siehe <em>app.routes.ts</em>, Pfad '/route-guard'. Auth wird zufällig ermittelt, weg und zurück navigieren um RouteGuard erneut zu triggern.</p>
  </details>

  <details>
    <summary>Protected methods and vars</summary>
    <p>Siehe <em>components/starwars.component.ts</em>, dort werden 'protected' Variablen im Template verwendet.</p>
  </details>

  <details>
    <summary>RxJS Action-Data-Stream</summary>
    <p>Zwar keine Angular Neuerung, aber wenns schon da ist ...siehe <em>components/starwars.component.ts</em>. Der Data Stream "piped" vom Action Stream, mit Initialwert und Fehlerwert.</p>
  </details>

  <details>
    <summary>Signals <sup>(v16)</sup></summary>
    <p>Siehe <em>components/signals.component.ts</em>.</p>
  </details>

  <details>
    <summary>Weitere, hier nicht behandelte Features</summary>
    <ul>
      <li>Server Side Renderung - non destructive hydration</li>
      <li>neue TypeScript Features</li>
    </ul>
  </details>

  `,
})
export class PageHomeComponent {
  protected logHovered(id: string) {
    console.log('hovered', id);
  }
}
