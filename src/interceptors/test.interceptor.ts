import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { NEVER } from 'rxjs';

// interceptor that allows only calls to the starwars API, nothing else
export const DemoInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (req.url.startsWith('https://swapi.dev/api')) {
    return next(req);
  } else {
    console.log('Malicious Request Intercepted', req.url);
    return NEVER;
  }
};
