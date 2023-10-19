import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PulserasComponent } from './pulseras/pulseras.component';
import { AnillosComponent } from './anillos/anillos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {  path: 'Pulseras', component: PulserasComponent  },
  {path:'Anillos', component: AnillosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
