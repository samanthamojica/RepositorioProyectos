import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoCompletaClase } from 'src/app/models/infoCompletaClase';
import { OpClaseService } from 'src/app/services/op-clase.service';
import { Alumno } from '../../models/alumno';

interface horarioClase{
  diaHorario: string ;
  horaHorario: string;
}

@Component({
  selector: 'app-busqueda-por-materia',
  templateUrl: './busqueda-por-materia.component.html',
  styleUrls: ['./busqueda-por-materia.component.css'],
})
export class BusquedaPorMateriaComponent {
  idClase: number;
  infoCompleta: infoCompletaClase;
  nombreClase: string;
  nombreMaestro: string;
  apPaternoM: string;
  apMaternoM: string;
  numCuentaM: string;
  tipoPlaza: string;
  listaAlumnos: Alumno[] = [];
  band: boolean = false;
  horario: Array<any> = [];

  constructor(
    private ruta: ActivatedRoute,
    private servicioClase: OpClaseService
  ) {}

  ngOnInit(): void {
    this.idClase = this.ruta.snapshot.params['idClase'];
    this.getClase();
  }

  getClase() {
    this.servicioClase.getClase(this.idClase).subscribe((infoCompletaR) => {
      this.infoCompleta = infoCompletaR;
      console.log(this.infoCompleta)
      debugger
      this.nombreClase = infoCompletaR.nombreMateria;
      this.nombreMaestro = infoCompletaR.maestro.nombreMaestro;
      this.apPaternoM = infoCompletaR.maestro.apPaternoM;
      this.apMaternoM = infoCompletaR.maestro.apMaternoM;
      this.numCuentaM = infoCompletaR.maestro.cuentaM;
      this.listaAlumnos = infoCompletaR.listaAlumnos;
      this.band = true;
      this.getHorario();
    });
  }

  getHorario() {
    let claseLunes = this.infoCompleta.horaDia.split(',');
    this.getHoraYDia(claseLunes, 'Lunes');

    let claseMartes = this.infoCompleta.horaDia.split(',');
    this.getHoraYDia(claseMartes, 'Martes');

    let claseMiercoles = this.infoCompleta.horaDia.split(',');
    this.getHoraYDia(claseMiercoles, 'Miercoles');

    let claseJueves = this.infoCompleta.horaDia.split(',');
    this.getHoraYDia(claseJueves, 'Jueves');

    let claseViernes = this.infoCompleta.horaDia.split(',');
    this.getHoraYDia(claseViernes, 'Viernes');

    let claseSabado = this.infoCompleta.horaDia.split(',');
    this.getHoraYDia(claseSabado, 'Sabado');
  }

  getHoraYDia(clase: string[], diaRecibido: string) {
    
    let claseHora = this.infoCompleta.horaHora.split(',');
    let posicion = clase.indexOf(diaRecibido);
       let h: horarioClase = {
      diaHorario: '',
      horaHorario: ''
    };

    if (claseHora[posicion] != undefined) {      
      h.diaHorario = diaRecibido;
      h.horaHorario = claseHora[posicion];
      this.horario.push(h);
    }
   
  }
}
