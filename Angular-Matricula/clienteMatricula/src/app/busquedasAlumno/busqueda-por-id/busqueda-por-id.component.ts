import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpAlumnoService } from '../../services/op-alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { OpClaseService } from '../../services/op-clase.service';
import { Horario } from 'src/app/models/horario';
import { OpMateriaService } from 'src/app/services/op-materia.service';
import { differenceInYears, parse } from 'date-fns';

@Component({
  selector: 'app-busqueda-por-id',
  templateUrl: './busqueda-por-id.component.html',
  styleUrls: ['./busqueda-por-id.component.css'],
})
export class BusquedaPorIdComponent {
  numeroCuenta: string;
  alumno: Alumno = new Alumno();
  listaHorario: Horario[] = [];
  arregloDias: Horario[] = [];
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  band : boolean = false;
  edad:number;

  constructor(
    private ruta: ActivatedRoute,
    private opAlumnoService: OpAlumnoService,
    private opMateria: OpMateriaService
  ) {}

  ngOnInit(): void {
    this.numeroCuenta = this.ruta.snapshot.params['numeroCuenta'];
    this.getHorario();
    this.getAlumno();
  }

  getAlumno() {this.opAlumnoService.getAlumno(this.numeroCuenta).subscribe((alumnoRecibido) => {
        this.alumno = alumnoRecibido;
        this.band = true;
        this.obtenerEdad();
      });
  }

  obtenerEdad(){
    const fechaN= this.alumno.fechaNacimientoA.toString();
    const fechaNacimiento = parse(fechaN, 'yyyy-MM-dd' , new Date());
    this.edad = differenceInYears(new Date(), fechaNacimiento);
    debugger

  }

  getHorario() {
    this.opMateria.getMateriasPorAlumno(this.numeroCuenta).subscribe((horarioR) => {
    this.listaHorario = horarioR;
    this.obtenerDias();
      });
  }

  obtenerDias() {
    let clasesLunes = this.listaHorario.filter((horario) => {
      return horario.dia.split(',').includes('Lunes');
    });

    this.horarioLunes = clasesLunes.map((claseLunes) => {
      {
        return this.metodoHorario(claseLunes, 'Lunes');
      }
    });

    let clasesMartes = this.listaHorario.filter((horario) => {
      return horario.dia.split(',').includes('Martes');
    });

    this.horarioMartes = clasesMartes.map((claseMartes) => {
      return this.metodoHorario(claseMartes, 'Martes');
    });

    let clasesMiercoles = this.listaHorario.filter((horario) => {
      return horario.dia.split(',').includes('Miercoles');
    });

    this.horarioMiercoles = clasesMiercoles.map((claseMiercoles) => {
      return this.metodoHorario(claseMiercoles, 'Miercoles');
    });

    let clasesJueves = this.listaHorario.filter((horario) => {
      return horario.dia.split(',').includes('Jueves');
    });

    this.horarioJueves = clasesJueves.map((claseJueves) => {
      return this.metodoHorario(claseJueves, 'Jueves');
    });

    let clasesViernes = this.listaHorario.filter((horario) => {
      return horario.dia.split(',').includes('Viernes');
    });
    this.horarioViernes = clasesViernes.map((claseViernes) => {
      return this.metodoHorario(claseViernes, 'Viernes');
    });

    let clasesSabado = this.listaHorario.filter((horario) => {
      return horario.dia.split(',').includes('Sabado');
    });

    this.horarioSabado = clasesSabado.map((claseSabado) => {
      return this.metodoHorario(claseSabado, 'Sabado');
    });
  }

  private metodoHorario(clase: Horario, dia: string) {
    let horario = new Horario();
    let diasSeparados = clase.dia.split(',');
    let pos = diasSeparados.indexOf(dia);
    let horasSeparadas = clase.hora.split(',');
    let horaClase = horasSeparadas[pos];
    horario.dia = dia;
    horario.hora = horaClase;
    horario.materia = clase.materia;
    return horario;
  }
}
