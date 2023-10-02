import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BuscarPokemonComponent } from './busquedaPokemons/buscar-pokemon/buscar-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BuscarPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
