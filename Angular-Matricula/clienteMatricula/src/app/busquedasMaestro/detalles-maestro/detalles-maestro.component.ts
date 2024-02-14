import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maestro } from 'src/app/models/maestro';
import { OpMaestroService } from '../../services/op-maestro.service';
import { Horario } from 'src/app/models/horario';
import { OpClaseService } from '../../services/op-clase.service';
import { differenceInYears, parse } from 'date-fns';

@Component({
  selector: 'app-detalles-maestro',
  templateUrl: './detalles-maestro.component.html',
  styleUrls: ['./detalles-maestro.component.css'],
})
export class DetallesMaestroComponent {
  numeroCuenta: string;
  maestro: Maestro = new Maestro();
  listaHorario: Horario[] = [];
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  band : boolean = false;
  edad: number;

  constructor(
    private ruta: ActivatedRoute,
    private opMaestroService: OpMaestroService,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.numeroCuenta = this.ruta.snapshot.params['numeroCuenta'];
    this.getMaestro();
  }



  getMaestro() {
    this.opMaestroService.getMaestro(this.numeroCuenta).subscribe((maestroR) => {
        this.maestro = maestroR;
        this.obtenerEdad();
                  this.band = true;
        this.getHorario();
      });
  }
  obtenerEdad(){
    const fechaN = this.maestro.fechaNacimientoM.toString();
    const fechaNacimiento = parse(fechaN, 'yyyy-MM-dd', new Date());
    this.edad = differenceInYears(new Date, fechaNacimiento );
    debugger
  }

  getHorario() {
    this.opClaseService.getClasePorMaestro(this.numeroCuenta).subscribe((horarioR) => {
        this.listaHorario = horarioR;

        let claseLunes = this.listaHorario.filter((dia) => {
          return dia.dia.includes('Lunes');
        });

        this.horarioLunes = claseLunes.map((horario) => {
          return this.getHorarioCompleto(horario, 'Lunes');
        });

        let claseMartes = this.listaHorario.filter((dia) => {
          return dia.dia.includes('Martes');
        });

        this.horarioMartes = claseMartes.map((horario) => {
          return this.getHorarioCompleto(horario, 'Martes');
        });

        let claseMiercoles = this.listaHorario.filter((dia) => {
          return dia.dia.includes('Miercoles');
        });
        this.horarioMiercoles = claseMiercoles.map((horario) => {
          return this.getHorarioCompleto(horario, 'Miercoles');
        });

        let claseJueves = this.listaHorario.filter((dia) => {
          return dia.dia.includes('Jueves');
        });
        this.horarioJueves = claseJueves.map((horario) => {
          return this.getHorarioCompleto(horario, 'Jueves');
        });

        let claseViernes = this.listaHorario.filter((dia) => {
          return dia.dia.includes('Viernes');
        });

        this.horarioViernes = claseViernes.map((horario) => {
          return this.getHorarioCompleto(horario, 'Viernes');
        });

        let claseSabado = this.listaHorario.filter((dia) => {
          dia.dia.includes('Sabado');
        });

        this.horarioSabado = claseSabado.map((horario) => {
          return this.getHorarioCompleto(horario, 'Sabado');
        });
      });
  }

  getHorarioCompleto(horario: Horario, dia: string) {
    let h: Horario = new Horario();
    let dias = horario.dia.split(',');
    let posicion = dias.indexOf(dia);
    let horasSeparadas = horario.hora.split(',');
    let horaMateria = horasSeparadas[posicion];
    h.dia = dia;
    h.hora = horaMateria;
    h.materia = horario.materia;
    return h;
  }
}
