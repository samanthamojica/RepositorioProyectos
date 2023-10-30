import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PulserasComponent } from './pulseras/pulseras.component';
import { AnillosComponent } from './anillos/anillos.component';
import { AretesComponent } from './aretes/aretes.component';
import { MasVendidosComponent } from './CategoriaAnillos/mas-vendidos/mas-vendidos.component';
import { DetallesAnilloComponent } from './CategoriaAnillos/detallesAnillo/detalles-anillo/detalles-anillo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Pulseras', component: PulserasComponent },
  { path: 'Anillos', component: AnillosComponent },
  { path: 'Aretes', component: AretesComponent },
  { path: 'MasVendidos', component: MasVendidosComponent },
  {path: 'Anillos/Anillo/:idAlumno', component : DetallesAnilloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
