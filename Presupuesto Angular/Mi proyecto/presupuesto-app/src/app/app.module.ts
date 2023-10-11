import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { IngresosService } from './Ingresos.service';
import { GastosService } from './gastos.service';
import { GastosComponent } from './gastos/gastos.component';
import { FormsModule } from '@angular/forms';
import { CabeceroComponent } from './cabecero/cabecero.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresosComponent,
    GastosComponent,
    CabeceroComponent, 
  ],
  imports: [
    BrowserModule,FormsModule,    
  ],
  providers: [IngresosService, GastosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
