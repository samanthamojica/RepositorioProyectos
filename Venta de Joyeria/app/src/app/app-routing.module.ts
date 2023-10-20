import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PulserasComponent } from './pulseras/pulseras.component';
import { AnillosComponent } from './anillos/anillos.component';
import { AretesComponent } from './aretes/aretes.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Pulseras', component: PulserasComponent },
  { path: 'Anillos', component: AnillosComponent },
  { path: 'Aretes', component: AretesComponent },
  { path: 'MasVendidos', component: MasVendidosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
