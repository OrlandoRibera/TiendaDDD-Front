import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenEntrega } from 'src/app/models/OrdenEntrega';
import { OrdenEntregaService } from '../../services/orden-entrega.service';

@Component({
  selector: 'app-orden-entrega',
  templateUrl: './orden-entrega.component.html',
  styleUrls: ['./orden-entrega.component.scss']
})
export class OrdenEntregaComponent implements OnInit {

  id: string = '';
  public ordenEntrega: OrdenEntrega = {
    id: this.id,
    items: [],
    latitudDestino: '',
    longitudDestino: '',
    nombreCliente: '',
    telefono: ''
  }

  public latSeguimiento = 0;
  public lonSeguimiento = 0;

  constructor(
    private _rute: ActivatedRoute,
    private _ordenEntregaService: OrdenEntregaService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this._rute.params.subscribe(
      parametros => {
        this.id = parametros.id; // Obtenemos el id del post para ver
        if (this.id) { // Si existe el id
          this._ordenEntregaService.getById(this.id).subscribe(result => {
            this.ordenEntrega = result;
          });
        } else { // Si no existe el id
          this._route.navigate(['/orden-entregas']);
        }
      }
    );
  }

  // Todo: verificar las funciones, debería estar todo bien, el location reload de coju nomas

  consolidar() {
    // Todo: no se si guardas un Date.now en ese campo de fecha
    this._ordenEntregaService.consolidar({
      "OrdenEntrega": {
        "Id": this.id
      },
      "FechaProgramado": Date.now
    }).subscribe(result => {
      window.location.reload();
    });
  }

  finalizar() {
    this._ordenEntregaService.finalizar(this.id).subscribe(result => {
      window.location.reload();
    });
  }

  anular() {
    this._ordenEntregaService.anular(this.id).subscribe(result => {
      window.location.reload();
    });
  }

  iniciarViaje() {
    this._ordenEntregaService.iniciarViaje(this.id).subscribe(result => {
      window.location.reload();
    });
  }

  finalizarViaje() {
    this._ordenEntregaService.finalizarViaje(this.id).subscribe(result => {
      window.location.reload();
    });
  }

  iniciarSeguimiento() {
    this._ordenEntregaService.iniciarSeguimiento({
      "Latitud": this.latSeguimiento,
      "Longitud": this.lonSeguimiento,
      "ViajeEntrega": {
        "Id": this.id
      }
    }).subscribe(result => {
      window.location.reload();
    });
  }

}
