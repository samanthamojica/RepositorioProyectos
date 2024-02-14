import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpMaestroService } from '../../services/op-maestro.service';
import { Maestro } from 'src/app/models/maestro';
import { OpClaseService } from '../../services/op-clase.service';
import { Horario } from 'src/app/models/horario';
import { differenceInYears, parse } from 'date-fns';

@Component({
  selector: 'app-busqueda-por-id-maestro',
  templateUrl: './busqueda-por-id-maestro.component.html',
  styleUrls: ['./busqueda-por-id-maestro.component.css'],
})
export class BusquedaPorIdMaestroComponent {
  numCuenta: string;
  maestro: Maestro = new Maestro();
  horarioMaestro: Horario[] = [];
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  band: boolean = false;
  edad: number;

  constructor(
    private ruta: ActivatedRoute,
    private OpMaestroService: OpMaestroService,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.numCuenta = this.ruta.snapshot.params['numCuenta'];
    this.getMaestro();
  }

  getMaestro() {
    this.OpMaestroService.getMaestro(this.numCuenta).subscribe((maestroR) => {
      this.maestro = maestroR;
      this.obtenerEdad();
      this.band = true;
      this.getHorario();
    });
  }

  obtenerEdad(){
    let fechaN = this.maestro.fechaNacimientoM.toString();
    let fechaNacimiento= parse(fechaN, 'yyyy-MM-dd', new Date());
    this.edad = differenceInYears(new Date,fechaNacimiento);
  }

  getHorario() {
    this.opClaseService
      .getClasePorMaestro(this.numCuenta)
      .subscribe((horarioMaestroR) => {
        this.horarioMaestro = horarioMaestroR;
        this.separarHorario();
      });
  }

  separarHorario() {
    let claseLunes = this.horarioMaestro.filter((dia) => {
      return dia.dia.includes('Lunes');
    });
    this.horarioLunes = claseLunes.map((horario) => {
      return this.separarHora(horario, 'Lunes');
    });

    let clasesMartes = this.horarioMaestro.filter((dia) => {
      return dia.dia.includes('Martes');
    });
    this.horarioMartes = clasesMartes.map((horario) => {
      return this.separarHora(horario, 'Martes');
    });
    debugger;

    let clasesMiercoles = this.horarioMaestro.filter((dia) => {
      return dia.dia.includes('Miercoles');
    });
    this.horarioMiercoles = clasesMiercoles.map((horario) => {
      return this.separarHora(horario, 'Miercoles');
    });

    let clasesJueves = this.horarioMaestro.filter((dia) => {
      return dia.dia.includes('Jueves');
    });
    this.horarioJueves = clasesJueves.map((horario) => {
      return this.separarHora(horario, 'Jueves');
    });

    let clasesViernes = this.horarioMaestro.filter((dia) => {
      return dia.dia.includes('Viernes');
    });
    this.horarioViernes = clasesViernes.map((horario) => {
      return this.separarHora(horario, 'Viernes');
    });

    let clasesSabado = this.horarioMaestro.filter((dia) => {
      return dia.dia.includes('Sabado');
    });

    this.horarioSabado = clasesSabado.map((horario) => {
      return this.separarHora(horario, 'Sabado');
    });
  }
  separarHora(clase: Horario, dia: string) {
    let diaSeparados = clase.dia.split(',');
    let posicion = diaSeparados.indexOf(dia);
    let horasSeparadas = clase.hora.split(',');
    let hora = horasSeparadas[posicion];
    let h: Horario = new Horario();
    h.dia = dia;
    h.hora = hora;
    h.materia = clase.materia;
    return h;
  }
}
