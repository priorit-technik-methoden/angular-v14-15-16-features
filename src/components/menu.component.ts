import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
/* 
  hier werden die 2 standalone directiven routerLink und routerLinkActive importiert
  und verwendet, um das menü zu implementieren und den aktiven menüpunnkt zu stylen
*/
@Component({
  standalone: true,
  selector: 'site-menu',
  imports: [RouterLink, RouterLinkActive],
  styles: [
    `a { font-size: 0.8em; border: 3px solid #333333; display: inline-block; margin: 0.25em; padding: 0.5em; cursor: pointer; background: #333333; color: white; text-decoration: none; } a:hover { color: yellow;  } a.menu-active { background: #555555; border: 3px dotted #999; }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <nav>
    <a routerLink="/home" routerLinkActive="menu-active">Home</a>
    <a routerLink="/lazy-loaded" routerLinkActive="menu-active">LazyLoadedComponent</a>
    <a routerLink="/route-input" [queryParams]="{ searchTerm: 'YOLO' }" routerLinkActive="menu-active">Input from Route</a>
    <a routerLink="/route-guard" routerLinkActive="menu-active">Route Guard (random pass)</a>
    <a routerLink="/images" routerLinkActive="menu-active">Images</a>
    <a routerLink="/signals" routerLinkActive="menu-active">Signals</a>
  </nav>`,
})
export class MenuComponent {}
