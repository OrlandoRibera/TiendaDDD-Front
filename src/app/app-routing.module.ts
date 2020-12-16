import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { TecnicoComponent } from './page/tecnico/tecnico.component';
import { CitaComponent } from './page/cita/cita.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ProductoComponent } from './page/producto/producto.component';
import { FormularioTrabajoComponent } from './page/formulario-trabajo/formulario-trabajo.component';
import { OrdenEntregasComponent } from './page/orden-entregas/orden-entregas.component';
import { OrdenEntregaComponent } from './page/orden-entrega/orden-entrega.component';
import { OrderServicioComponent } from './page/order-servicio/order-servicio.component';


const routes: Routes = [
  { path: '', component: IndexComponent, data: { title: 'Index' } },
  { path: 'order-servicio/:id', component: OrderServicioComponent, data: { title: 'Orden Servicio' }, pathMatch: 'full' },
  { path: 'tecnico', component: TecnicoComponent, data: { title: 'Técnico' } },
  { path: 'cita', component: CitaComponent, data: { title: 'Cita' } },
  { path: 'cliente', component: ClienteComponent, data: { title: 'Cliente' } },
  { path: 'producto', component: ProductoComponent, data: { title: 'Producto' } },
  { path: 'form-trabajo', component: FormularioTrabajoComponent, data: { title: 'Formulario' } },
  { path: 'orden-entregas', component: OrdenEntregasComponent, data: { title: 'Órdenes de entrega' } },
  { path: 'orden-entrega/:id', component: OrdenEntregaComponent, data: { title: 'Orden entrega' }, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
