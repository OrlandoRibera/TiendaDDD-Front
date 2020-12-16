import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  validEmail: string = 'admin@example.com';
  validPassword: string = 'password123';

  email: string = '';
  password: string = '';

  public userEmailLogged: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  isLogged: boolean = false;

  constructor(private _usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    if (this._usuarioService.getUserLoggedIn()) {
      this.isLogged = true;
      this.userEmailLogged = this._usuarioService.getUserLoggedIn().email;
    }
  }

  login() {
    if (this.validEmail === this.email && this.password === this.validPassword) {
      this._usuarioService.setUserLoggedIn({ email: this.email });
      this.isLogged = true;
      window.location.reload();
    }
  }

  logout() {
    this._usuarioService.logOut();
    window.location.reload();
  }
}
