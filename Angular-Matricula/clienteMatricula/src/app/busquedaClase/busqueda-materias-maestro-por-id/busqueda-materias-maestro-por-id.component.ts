import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpMaestroService } from '../../services/op-maestro.service';
import { Maestro } from 'src/app/models/maestro';
import { OpClaseService } from 'src/app/services/op-clase.service';
import { Horario } from 'src/app/models/horario';
import { ClasesPorHoraMaestro } from 'src/app/models/clasesPorHoraMaestro';

@Component({
  selector: 'app-busqueda-materias-maestro-por-id',
  templateUrl: './busqueda-materias-maestro-por-id.component.html',
  styleUrls: ['./busqueda-materias-maestro-por-id.component.css'],
})
export class BusquedaMateriasMaestroPorIdComponent {
  idMaestro: string;
  maestro: Maestro = new Maestro();
  horario: Horario[] = [];
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  horarioP: Horario[] = [];
  horarioPrincipal: Horario[] = [];
  idClase: string;
  dias: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  clasesPorHora: ClasesPorHoraMaestro[] = new Array<ClasesPorHoraMaestro>();
  grupos: Map<string, Horario[]> = new Map<string, Horario[]>();
  band: boolean = false;

  constructor(
    private ruta: ActivatedRoute,
    private opMaestroService: OpMaestroService,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.idMaestro = this.ruta.snapshot.params['idMaestro'];
    console.log('valor de idMaestro: ' + this.maestro);
    if (this.idMaestro == '') {
      this.band = true;
    } else {
      this.getClasesMaestro();
      this.getHorario();
    }
  }

   getClasesMaestro() {
    this.opMaestroService.getMaestro(this.idMaestro).subscribe((maestroR) => {
      this.maestro = maestroR;
     
    });
  }

  getHorario() {
    this.opClaseService
      .getClasePorMaestro(this.idMaestro)
      .subscribe((horarioR) => {
        this.horario = horarioR;
        this.getHorarioSeparado();
        this.contenar();
      });
  }

  getHorarioSeparado() {
    let clasesLunes = this.horario.filter((dia) => {
      return dia.dia.includes('Lunes');
    });

    this.horarioLunes = clasesLunes.map((horario) => {
      return this.separarClases('Lunes', horario);
    });
    //*****/

    let ClaseMartes = this.horario.filter((dia) => {
      return dia.dia.includes('Martes');
    });
    this.horarioMartes = ClaseMartes.map((horario) => {
      return this.separarClases('Martes', horario);
    });
    //*****/
    let clasesMiercoles = this.horario.filter((dia) => {
      return dia.dia.includes('Miercoles');
    });
    this.horarioMiercoles = clasesMiercoles.map((horario) => {
      return this.separarClases('Miercoles', horario);
    });
    //*****/
    let clasesJueves = this.horario.filter((dia) => {
      return dia.dia.includes('Jueves');
    });
    this.horarioJueves = clasesJueves.map((horario) => {
      return this.separarClases('Jueves', horario);
    });
    //********* */

    let clasesViernes = this.horario.filter((dia) => {
      return dia.dia.includes('Viernes');
    });
    this.horarioViernes = clasesViernes.map((horario) => {
      return this.separarClases('Viernes', horario);
    });
    //********** */

    let clasesSabado = this.horario.filter((dia) => {
      return dia.dia.includes('Sabado');
    });

    this.horarioSabado = clasesSabado.map((horario) => {
      return this.separarClases('Sabado', horario);
    });
  }

  separarClases(dia: string, horario: Horario) {
    let claseDia = horario.dia.split(',');
    let posicion = claseDia.indexOf(dia);
    let hora = horario.hora.split(',');
    let horaClase = hora[posicion];
    let h: Horario = new Horario();
    h.idClase = horario.idClase;
    h.dia = dia;
    h.hora = horaClase;
    h.materia = horario.materia;
    return h;
  }

  contenar() {
    this.horarioPrincipal = this.horarioLunes.concat(
      this.horarioMartes,
      this.horarioMiercoles,
      this.horarioJueves,
      this.horarioViernes,
      this.horarioSabado
    );
    this.horarioPrincipal.sort((a, b) => parseInt(a.hora) - parseInt(b.hora));

    const grupos = this.horarioPrincipal.reduce(
      (map: Map<string, Horario[]>, item: Horario) => {
        const { hora } = item;
        if (map.has(hora)) {
          map.get(hora)?.push(item);
        } else {
          map.set(hora, [item]);
        }

        return map;
      },
      new Map<string, Horario[]>()
    );

    for (const [key, value] of grupos.entries()) {
      let clases = new ClasesPorHoraMaestro(key);
      clases.horarios = value;
      this.clasesPorHora.push(clases);
    }
  }
}
