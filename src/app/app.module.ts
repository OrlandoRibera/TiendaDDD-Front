import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TecnicoComponent } from './page/tecnico/tecnico.component';
import { CitaComponent } from './page/cita/cita.component';
import { ClienteComponent } from './page/cliente/cliente.component';
import { ProductoComponent } from './page/producto/producto.component';
import { FormularioTrabajoComponent } from './page/formulario-trabajo/formulario-trabajo.component';

// Angular Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrdenEntregasComponent } from './page/orden-entregas/orden-entregas.component';
import { OrdenEntregaComponent } from './page/orden-entrega/orden-entrega.component';
import { OrderServicioComponent } from './page/order-servicio/order-servicio.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    TecnicoComponent,
    CitaComponent,
    ClienteComponent,
    ProductoComponent,
    FormularioTrabajoComponent,
    OrdenEntregasComponent,
    OrdenEntregaComponent,
    OrderServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    ClipboardModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
