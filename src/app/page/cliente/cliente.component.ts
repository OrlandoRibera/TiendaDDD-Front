import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Cliente } from '../../models/Cliente';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public clientesFiltrados: Cliente[] = [];
  public clientes: Cliente[] = [];
  public busqueda: string = '';

  // Para insertar uno nuevo
  public newClient: Cliente | any = {
    name: '',
    lastname: '',
    address: '',
    email: '',
    phone: ''
  }

  constructor(
    private _clientService: ClientService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._clientService.getAll().subscribe((result: any) => {
      this.clientes = result.clients;
      this.clientesFiltrados = result.clients;
    });
  }

  copied_message() {
    this._snackBar.open('¡Id copiado!', '', {
      duration: 2000
    });
  }

  filtrar() {
    if (this.busqueda.length > 0) {

      this.clientesFiltrados = this.clientesFiltrados.filter(cliente => {
        if (cliente.name.toLocaleLowerCase().indexOf(this.busqueda.toLocaleLowerCase()) !== -1 ||
          cliente.lastname.toLocaleLowerCase().indexOf(this.busqueda.toLocaleLowerCase()) !== -1 ||
          cliente.id.indexOf(this.busqueda) !== -1) {
          return cliente;
        }
      });
    } else {
      this.clientesFiltrados = this.clientes;
    }
  }

  guardarCliente() {
    this._clientService.insertOne(this.newClient).subscribe(result => {
      if (result.ok) {
        this._snackBar.open('¡Insertado!', '', {
          duration: 2000
        });
        window.location.reload();
      } else {
        alert('Algo salió mal');
      }
    });
  }

}
