import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { OrdenServicio } from '../../models/OrdenServicio';
import { ServiceOrderService } from '../../services/service-order.service';
import { ProductService } from '../../services/product.service';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  public ordenServicios: any[] = [];
  public productos: Producto[] = [];
  public clientes: any[] = [];

  public newOrdenServicio: OrdenServicio = {
    ServiceType: 0,
    AlternativeAddress: '',
    Description: '',
    Price: 0,
    Products: [],
    ServiceOrder: { Client: 1 }
  }

  constructor(
    private _ordenServicioService: ServiceOrderService,
    private _productoService: ProductService,
    private _clienteService: ClientService
  ) { }

  ngOnInit(): void {
    this._ordenServicioService.getAll().subscribe(result => {
      this.ordenServicios = result.serviceOrders;
      // Obtener productos
      this._productoService.getAll().subscribe(result => {
        this.productos = result.productList;
        // Obtener clientes
        this._clienteService.getAll().subscribe(result => {
          this.clientes = result.clients;
        });
      });
    });
  }

  guardarOrdenServicio() {

    const obj = {
      ServiceType: this.newOrdenServicio.ServiceType,
      Price: this.newOrdenServicio.Price,
      Description: this.newOrdenServicio.Description,
      AlternativeAddress: this.newOrdenServicio.AlternativeAddress,
      ServiceOrder: {
        Client: {
          Id: this.newOrdenServicio.ServiceOrder.Client
        }
      },
      Products: [
        {
          Id: this.newOrdenServicio.Products
        }
      ]
    }

    console.log(obj);
    

    this._ordenServicioService.insertOne(obj).subscribe(result => {
      window.location.reload();
    });
  }
}
