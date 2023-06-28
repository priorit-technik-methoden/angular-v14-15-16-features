import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppRootComponent } from './components/app-root.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DemoInterceptor } from './interceptors/test.interceptor';

bootstrapApplication(AppRootComponent, {
  providers: [
    provideRouter(APP_ROUTES, withComponentInputBinding()),
    provideHttpClient(withInterceptors([DemoInterceptor])),
  ],
});
