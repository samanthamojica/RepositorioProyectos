import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { AgregarMaestroComponent } from './agregar-maestro/agregar-maestro.component';

import { EditarAlumnNumCuentaComponent } from './editar-alumn-num-cuenta/editar-alumn-num-cuenta.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { EliminarAlumnoNumCuentaComponent } from './eliminar-alumno-num-cuenta/eliminar-alumno-num-cuenta.component';
import { EliminarAlumnoComponent } from './eliminar-alumno/eliminar-alumno.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { EliminarMaestroComponent } from './Maestro/eliminar-maestro/eliminar-maestro.component';
import { EliminarMaestroNumCuentaComponent } from './Maestro/eliminar-maestro-num-cuenta/eliminar-maestro-num-cuenta.component';
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
import { BusquedaClasePrincipalComponent } from './busquedaClase/busqueda-clase-principal/busqueda-clase-principal.component';
import { BusquedaPorMateriaComponent } from './busquedaClase/busqueda-por-materia/busqueda-por-materia.component';
import { BusquedaPrincipalComponent } from './busquedaClase/busqueda-principal/busqueda-principal.component';
import { BusquedaMateriasMaestroPorIdComponent } from './busquedaClase/busqueda-materias-maestro-por-id/busqueda-materias-maestro-por-id.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'alumnos', component: EncabezadoComponent },
  { path: 'agregar-alumno/:esNuevo', component: AgregarAlumnoComponent },
  { path: 'eliminar-alumno', component: EliminarAlumnoComponent },
  { path: 'eliminar-alumno-numCuenta/:numeroCuenta', component: EliminarAlumnoNumCuentaComponent},
  { path:'editar-alumno', component:EditarAlumnoComponent},
  { path: 'editar-alumno-nuCuenta/:numCuenta', component:EditarAlumnNumCuentaComponent},
  //rutas maestro
  { path: 'agregar-maestro', component: AgregarMaestroComponent },
  { path: 'eliminar-maestro', component: EliminarMaestroComponent},
  {path: 'eliminar-maestro/:numCuenta', component: EliminarMaestroNumCuentaComponent},
  {path: 'almacenar-maestrosEditado', component: AgregarMaestroEditadoComponent},
  {path: 'editar-maestro', component: EditarMaestroComponent},
  {path: 'editar-maestro-numCuenta/:numCuenta', component: EditarMaestroNumCuentaComponent},
  //materia
  {path: 'agregar-materia', component: AgregarMateriaComponent},
  //clases
  {path: 'agregar-clase', component: AgregarClaseComponent, children:[
    {path: 'agregar-alumnos', component: AgregarAlumnosAClaseComponent},
    {path: 'agregar-maestro', component: AgregarMaestroClaseComponent},
    {path: 'agregar-materia', component: AgregarMateriaClaseComponent},
    {path: 'agregar-horario', component: AgregarHorarioClaseComponent},
    {path: 'confimacion', component: ConfirmacionClaseComponent}
  ]},

  //busquedas
  {path: 'busquedas-alumno', component: PagPrincipalBusquedasComponent},
  {path: 'busquedas-alumno/busqueda-id-Alumno/:numeroCuenta', component: BusquedaPorIdComponent},
  {path: 'busquedas-alumno/busqueda-por-Nombre/:nombreAlumno', component: BusquedaPorNombreComponent},
  {path: 'busquedas-alumno/busqueda-por-Nombre/:nombreAlumno/detalles-alumno/:numeroCuenta', component: DetallesAlumnoComponent},
  {path: 'busqueda-maestro', component: PrincipalBusquedasMComponent},
  {path: 'busqueda-maestro/busqueda-id-maestro/:numCuenta', component: BusquedaPorIdMaestroComponent},
  {path: 'busqueda-maestro/busqueda-por-nombre/:nombreMaestro', component: BusquedaPorNombreMaestroComponent},  
  {path: 'busqueda-maestro/busqueda-por-nombre/:nombreMaestro/detalles-maestro/:numeroCuenta', component: DetallesMaestroComponent},
  {path: 'busqueda-materia', component: BusquedaMateriaPrincipalComponent},
  {path: 'busqueda-materia/busqueda-materia-por-nombre/:nombreMateria', component: BusquedaMateriaPorNombreComponent},
  {path: 'busqueda-materia/busqueda-materia-por-nombre/:nombreMateria/detalles-materia/:idMateria', component: DetallesBusquedaMateriaPorNombreComponent},
  {path: 'busqueda-clase', component: BusquedaPrincipalComponent},
  {path: 'busqueda-clase/busqueda-Todas-las-clases/busqueda-id-maestro/:numCuenta', component: BusquedaPorIdMaestroComponent },
  {path: 'busqueda-clase/busqueda-Todas-las-clases/busqueda-materia/:idClase', component: BusquedaPorMateriaComponent },
  {path: 'busqueda-clase/busqueda-Todas-las-clases', component: BusquedaClasePrincipalComponent},
  {path: 'busqueda-clase/busqueda-alumno-clases/:idAlumno', component: BusquedaClasePrincipalComponent},
  {path: 'busqueda-clase/busqueda-alumno-clases/:idAlumno/busqueda-id-maestro/:numCuenta', component:BusquedaPorIdMaestroComponent },
  {path: 'busqueda-clase/busqueda-alumno-clases/:idAlumno/busqueda-materia/:idClase', component: BusquedaPorMateriaComponent },
  {path: 'busqueda-clase/busqueda-maestro-id/:idMaestro', component: BusquedaMateriasMaestroPorIdComponent},
  {path: 'busqueda-clase/busqueda-maestro-id/:idMaestro/busqueda-materia/:idClase', component: BusquedaPorMateriaComponent}, 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
