import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUserLoggedIn() {
    if (sessionStorage.getItem('currentUser') == null ||
      sessionStorage.getItem('currentUser') === undefined) {
      return null;
    }
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  setUserLoggedIn(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  logOut() {
    sessionStorage.removeItem('currentUser');
  }
}
