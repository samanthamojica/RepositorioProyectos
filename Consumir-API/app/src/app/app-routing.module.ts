import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPokemonComponent } from './busquedaPokemons/buscar-pokemon/buscar-pokemon.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : '' , component: AppComponent },
  {path: '/buscarPokemons', component: BuscarPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
