import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriasComponent } from './categorias/categorias.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { AnillosComponent } from './anillos/anillos.component';
import { PulserasComponent } from './pulseras/pulseras.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { AretesComponent } from './aretes/aretes.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { FooterComponent } from './footer/footer.component';
import { AnilloComponent } from './CategoriaAnillos/anillo/anillo.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, PrincipalComponent, CategoriasComponent, AnillosComponent, PulserasComponent, InicioComponent, AretesComponent, MasVendidosComponent, FooterComponent, AnilloComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatRadioModule,
    /* FormControl */
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
