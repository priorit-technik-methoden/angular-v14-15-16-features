import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `<site-menu /><router-outlet />`,
})
export class AppRootComponent {}
