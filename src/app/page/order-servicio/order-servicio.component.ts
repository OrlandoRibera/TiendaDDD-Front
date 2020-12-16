import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOrderService } from '../../services/service-order.service';
import { OrdenServicio } from '../../models/OrdenServicio';
import { TechnicianService } from 'src/app/services/technician.service';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-order-servicio',
  templateUrl: './order-servicio.component.html',
  styleUrls: ['./order-servicio.component.scss']
})
export class OrderServicioComponent implements OnInit {
  public id: any = '';
  public ordenServicio = {
    serviceOrdersHasProductsId: '',
    serviceOrder: {
      id: '',
      creationDate: '',
      client: { id: '', name: '', lastname: '', phone: '', email: '', address: '' },
      status: 0
    },
    product: { id: '', productBrand: '', productName: '', productPrice: 0 },
    detail: { serviceType: 0, price: 0, serviceOrder: null, description: '', alternativeAddress: '', products: null }
  };

  public tecnicos = [];

  public cita = {
    VisitDate: '',
    ServiceOrder: {
      Id: ''
    },
    Technicians: []
  };

  constructor(
    private _rute: ActivatedRoute,
    private _ordenServicioService: ServiceOrderService,
    private _tecnicoService: TechnicianService,
    private _citaService: CitaService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this._rute.params.subscribe(
      parametros => {
        this.id = parametros.id; // Obtenemos el id del post para ver
        if (this.id) { // Si existe el id
          this._ordenServicioService.getById(this.id).subscribe(result => {
            this.ordenServicio = result.serviceOrder[0];
            this._tecnicoService.getAll().subscribe(result => {
              this.tecnicos = result.technicians;
            });
          });
        } else { // Si no existe el id
          this._route.navigate(['/']);
        }
      }
    );
  }

  cancelar() {
    this._ordenServicioService.cancelOne(this.id).subscribe(result => {
      window.location.reload();
    });
  }

  addCita() {
    const obj = {
      VisitDate: this.cita.VisitDate,
      ServiceOrder: {
        Id: this.id
      },
      Technicians: [{
        TechnicianId: this.cita.Technicians
      }]
    };
    this._citaService.insertOne(obj).subscribe(result => {
      window.location.reload();
    });
  }

}
