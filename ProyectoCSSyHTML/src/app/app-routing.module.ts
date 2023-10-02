import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasExpandiblesComponent } from './tarjetasExpandibles/tarjetas-expandibles/tarjetas-expandibles.component';
import { PasosDeProgresoComponent } from './PasosDeProgreso/pasos-de-progreso/pasos-de-progreso.component';
import { AnimacionGiratoriaComponent } from './AnimacionGiratoria/animacion-giratoria/animacion-giratoria.component';
import { OcultarBuscadorComponent } from './4BusquedaOculta/ocultar-buscador/ocultar-buscador.component';

const routes: Routes = [
  {path: 'TarjetasExpandiblesComponent', component: TarjetasExpandiblesComponent},
  {path: 'PasosDeProgresoComponent', component: PasosDeProgresoComponent},
  {path: 'AnimacionGiratoriaComponent', component: AnimacionGiratoriaComponent},
  {path: 'OcultarBuscadorComponent', component: OcultarBuscadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
