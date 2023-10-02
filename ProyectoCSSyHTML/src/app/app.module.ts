import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasExpandiblesComponent } from './tarjetasExpandibles/tarjetas-expandibles/tarjetas-expandibles.component';
import { PasosDeProgresoComponent } from './PasosDeProgreso/pasos-de-progreso/pasos-de-progreso.component';
import { AnimacionGiratoriaComponent } from './AnimacionGiratoria/animacion-giratoria/animacion-giratoria.component';
import { OcultarBuscadorComponent } from './4BusquedaOculta/ocultar-buscador/ocultar-buscador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    TarjetasExpandiblesComponent,
    PasosDeProgresoComponent,
    AnimacionGiratoriaComponent,
    OcultarBuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
