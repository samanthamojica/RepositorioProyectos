import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { AgregarMaestroComponent } from './agregar-maestro/agregar-maestro.component';
import { RouterModule } from '@angular/router';
import { EliminarAlumnoComponent } from './eliminar-alumno/eliminar-alumno.component';
import { EliminarAlumnoNumCuentaComponent } from './eliminar-alumno-num-cuenta/eliminar-alumno-num-cuenta.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';

import {
  LocationStrategy,
  HashLocationStrategy,
  CommonModule,
} from '@angular/common';
import { EditarAlumnNumCuentaComponent } from './editar-alumn-num-cuenta/editar-alumn-num-cuenta.component';

import { EliminarMaestroComponent } from './Maestro/eliminar-maestro/eliminar-maestro.component';
import { EliminarMaestroNumCuentaComponent } from './Maestro/eliminar-maestro-num-cuenta/eliminar-maestro-num-cuenta.component';
import { ErrorNumCuentaComponent } from './errores/error-num-cuenta/error-num-cuenta.component';
import { EditarMaestroComponent } from './Maestro/editar-maestro/editar-maestro.component';
import { AgregarMaestroEditadoComponent } from './Maestro/agregar-maestro-editado/agregar-maestro-editado.component';
import { EditarMaestroNumCuentaComponent } from './Maestro/editar-maestro-num-cuenta/editar-maestro-num-cuenta.component';
import { AgregarMateriaComponent } from './materia/agregar-materia/agregar-materia.component';
import { AgregarClaseComponent } from './clases/agregar-clase/agregar-clase.component';
import { AgregarAlumnosAClaseComponent } from './clases/agregar-alumnos-aclase/agregar-alumnos-aclase.component';
import { AgregarMaestroClaseComponent } from './clases/agregar-maestro-clase/agregar-maestro-clase.component';
import { AgregarMateriaClaseComponent } from './clases/agregar-materia-clase/agregar-materia-clase.component';
import { AgregarHorarioClaseComponent } from './clases/agregar-horario-clase/agregar-horario-clase.component';
import { ConfirmacionClaseComponent } from './clases/confirmacion-clase/confirmacion-clase.component';

import { InfGuardadaOkComponent } from './mensajes/inf-guardada-ok/inf-guardada-ok.component';
import { InfNoGuardadaComponent } from './mensajes/inf-no-guardada/inf-no-guardada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BusquedaPorIdComponent } from './busquedasAlumno/busqueda-por-id/busqueda-por-id.component';
import { PagPrincipalBusquedasComponent } from './busquedasAlumno/pag-principal-busquedas/pag-principal-busquedas.component';
import { BusquedaPorNombreComponent } from './busquedasAlumno/busqueda-por-nombre/busqueda-por-nombre.component';
import { DetallesAlumnoComponent } from './busquedasAlumno/detalles-alumno/detalles-alumno.component';
import { PrincipalBusquedasMComponent } from './busquedasMaestro/principal-busquedas-m/principal-busquedas-m.component';
import { BusquedaPorIdMaestroComponent } from './busquedasMaestro/busqueda-por-id-maestro/busqueda-por-id-maestro.component';
import { BusquedaPorNombreMaestroComponent } from './busquedasMaestro/busqueda-por-nombre-maestro/busqueda-por-nombre-maestro.component';
import { DetallesMaestroComponent } from './busquedasMaestro/detalles-maestro/detalles-maestro.component';
import { BusquedaMateriaPrincipalComponent } from './busquedaMateria/busqueda-materia-principal/busqueda-materia-principal.component';
import { BusquedaMateriaPorNombreComponent } from './busquedaMateria/busqueda-materia-por-nombre/busqueda-materia-por-nombre.component';
import { DetallesBusquedaMateriaPorNombreComponent } from './busquedaMateria/detalles-busqueda-materia-por-nombre/detalles-busqueda-materia-por-nombre.component';
import { SimpleNgLoaderModule } from 'simple-ng-loader';
import { BusquedaClasePrincipalComponent } from './busquedaClase/busqueda-clase-principal/busqueda-clase-principal.component';
import { BusquedaPorMateriaComponent } from './busquedaClase/busqueda-por-materia/busqueda-por-materia.component';
import { ImprimirHorarioComponent } from './busquedaClase/imprimir-horario/imprimir-horario.component';
import { BusquedaPrincipalComponent } from './busquedaClase/busqueda-principal/busqueda-principal.component';
import { BusquedaMateriasMaestroPorIdComponent } from './busquedaClase/busqueda-materias-maestro-por-id/busqueda-materias-maestro-por-id.component';
import { InputVacioComponent } from './errores/input-vacio/input-vacio.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { OpAlumnoService } from './services/op-alumno.service';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    EncabezadoComponent,
    InicioComponent,
    AgregarAlumnoComponent,
    AgregarMaestroComponent,
    EliminarAlumnoComponent,
    EliminarAlumnoNumCuentaComponent,
    EditarAlumnoComponent,
    EditarAlumnNumCuentaComponent,
    EliminarMaestroComponent,
    EliminarMaestroNumCuentaComponent,
    ErrorNumCuentaComponent,
    EditarMaestroComponent,
    AgregarMaestroEditadoComponent,
    EditarMaestroNumCuentaComponent,
    AgregarMateriaComponent,
    AgregarClaseComponent,
    AgregarAlumnosAClaseComponent,
    AgregarMaestroClaseComponent,
    AgregarMateriaClaseComponent,
    AgregarHorarioClaseComponent,
    ConfirmacionClaseComponent,
    InfGuardadaOkComponent,
    InfNoGuardadaComponent,
  
    BusquedaPorIdComponent,
    PagPrincipalBusquedasComponent,
    BusquedaPorNombreComponent,
    DetallesAlumnoComponent,
    PrincipalBusquedasMComponent,
    BusquedaPorIdMaestroComponent,
    BusquedaPorNombreMaestroComponent,
    DetallesMaestroComponent,
    BusquedaMateriaPrincipalComponent,
    BusquedaMateriaPorNombreComponent,
    DetallesBusquedaMateriaPorNombreComponent,
    BusquedaClasePrincipalComponent,
    BusquedaPorMateriaComponent,
    ImprimirHorarioComponent,
    BusquedaPrincipalComponent,
    BusquedaMateriasMaestroPorIdComponent,
    InputVacioComponent,
    PruebasComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule,
    SimpleNgLoaderModule,
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {  provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgregarHorarioClaseComponent),
      multi: true, },
    OpAlumnoService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
