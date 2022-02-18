import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  register(login: string, password: string) {}

  login(login: string, password: string) {}

  logout() {}
}
