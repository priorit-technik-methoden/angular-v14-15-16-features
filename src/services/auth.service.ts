import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthentaticated(): boolean {
    // super secure random auth check
    return Math.round(Math.random()) === 1 ? true : false;
  }
}
