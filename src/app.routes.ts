import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { PageHomeComponent } from './components/home.page.component';
import { AuthService } from './services/auth.service';
import { SECRET_API_KEY } from './tokens';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: PageHomeComponent,
    title: 'Home',
  },
  {
    path: 'lazy-loaded',
    loadComponent: () =>
      import('./components/lazy-loaded.page.component').then(
        (m) => m.PageLazyLoadedComponent
      ),
    title: 'Lazy Loaded Component',
    // provide dependency via route > use inject to get it
    providers: [
      {
        provide: SECRET_API_KEY,
        useValue: 'dsfg-hrdg-jjfs-qrbv-asdd-mlop-qhsc',
      },
    ],
  },
  {
    path: 'route-input',
    loadComponent: () =>
      import('./components/route-input.page.component').then(
        (m) => m.PageRouteInputComponent
      ),
    title: 'Input from Route',
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./components/error.page.component').then(
        (m) => m.PageErrorComponent
      ),
  },
  {
    path: 'route-guard',
    loadComponent: () =>
      import('./components/route-guard.component').then(
        (m) => m.PageRouteGuardComponent
      ),
    /* functional route guard. could be put in a separate file as a function of return type 'CanActivateFn' */
    canActivate: [
      (): CanActivateFn => {
        const router = inject(Router);
        const authService = inject(AuthService);
        const auth = authService.isAuthentaticated();
        if (auth === true) {
          return () => true;
        } else {
          router.navigateByUrl('/error');
          return () => false;
        }
      },
    ],
  },
  {
    path: 'images',
    loadComponent: () =>
      import('./components/images.page.component').then(
        (m) => m.PageImagesComponent
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./components/signals.page.component').then(
        (m) => m.PageSignalsComponent
      ),
  },
];
