import { Component, OnInit } from '@angular/core';
import { OrdenEntrega } from '../../models/OrdenEntrega';
import { OrdenEntregaService } from '../../services/orden-entrega.service';

@Component({
  selector: 'app-orden-entregas',
  templateUrl: './orden-entregas.component.html',
  styleUrls: ['./orden-entregas.component.scss']
})
export class OrdenEntregasComponent implements OnInit {

  // Todo: Vaciar este array de objetos de prueba
  public ordenEntregas: OrdenEntrega[] = [
    {
      id: "89yd9eaf-124124dae-1341df13f",
      items: [],
      latitudDestino: '-1516516',
      longitudDestino: '1535134',
      nombreCliente: 'Juano Perez',
      telefono: '78183992'
    },
    {
      id: "854d6ae8-d4e54eda-fea484f8e",
      items: [],
      latitudDestino: '-134186',
      longitudDestino: '-4684687',
      nombreCliente: 'Francisco Fernandez',
      telefono: '7584853'
    }
  ];

  constructor(private _ordenEntregaService: OrdenEntregaService) { }

  ngOnInit(): void {
    // Todo: descomentar y verificar que se cargue bien la información en el template
    // this._ordenEntregaService.getAll().subscribe(result => {
    //   this.ordenEntregas = result.orders;
    // });
  }

}
