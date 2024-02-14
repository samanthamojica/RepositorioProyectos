import { Component } from '@angular/core';
import { OpClaseService } from '../../services/op-clase.service';
import { Clase } from 'src/app/models/clase';
import { ClasePorHora } from 'src/app/models/clasesPorHora';
import { ActivatedRoute } from '@angular/router';
import { OpAlumnoService } from 'src/app/services/op-alumno.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-busqueda-clase-principal',
  templateUrl: './busqueda-clase-principal.component.html',
  styleUrls: ['./busqueda-clase-principal.component.css'],
})
export class BusquedaClasePrincipalComponent {
  arrayHorario: Clase[] = [];
  horarioLunes: Clase[] = [];
  horarioMartes: Clase[] = [];
  horarioMiercoles: Clase[] = [];
  horarioJueves: Clase[] = [];
  horarioViernes: Clase[] = [];
  horarioSabado: Clase[] = [];
  diasSeparados: string[];
  horasSeparados: string[] = [];
  arregloPrincipal: Clase[] = [];
  dia: string = '';
  idCuenta: string;
  titulo : string= '';
  alumno: Alumno = new Alumno();

  clasePorHora: ClasePorHora[] = new Array<ClasePorHora>();
  dias: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];

  constructor(
    private opClaseService: OpClaseService,
    private ruta: ActivatedRoute,
    private opAlumnoService: OpAlumnoService
  ) {}

  ngOnInit(): void {
    this.idCuenta = this.ruta.snapshot.params['idAlumno'];
     
    if (this.idCuenta != undefined) {
   
     this.obtenerClasesAlumno();
    } else {
     
      this.servicioHorario();
    }
  }

  servicioHorario() {
    this.opClaseService.getClases('NP').subscribe((arrayR) => {
      this.arrayHorario = arrayR;
      this.titulo = 'Calendario General';
      this.getHorario();
      this.concatenarArreglos();
    });
  }

  obtenerClasesAlumno() {
    this.opClaseService.getClases(this.idCuenta).subscribe((arrayR) => {
      this.arrayHorario = arrayR;
      this.titulo = 'Calendario del Alumno'
      this.getHorario();
      this.concatenarArreglos();
    });

    //obtener informacion del alumno:
    this.getAlumno();
  }

  getAlumno() {this.opAlumnoService.getAlumno(this.idCuenta).subscribe((alumnoRecibido) => {
    this.alumno = alumnoRecibido;
    console.log(this.alumno.emailA)
   
  });
}

  getHorario() {
    let claseLunes = this.arrayHorario.filter((dia) => {
      return dia.dia.includes('Lunes');
    });
    this.horarioLunes = claseLunes.map((horario) => {
      return this.getDiaYHora('Lunes', horario);
    });
    this.horarioLunes.sort((a, b) => parseInt(a.hora) - parseInt(b.hora));

    let clasesMartes = this.arrayHorario.filter((dia) => {
      return dia.dia.includes('Martes');
    });
    this.horarioMartes = clasesMartes.map((horario) => {
      return this.getDiaYHora('Martes', horario);
    });

    let clasesMiercoles = this.arrayHorario.filter((dia) => {
      return dia.dia.includes('Miercoles');
    });
    this.horarioMiercoles = clasesMiercoles.map((horario) => {
      return this.getDiaYHora('Miercoles', horario);
    });

    let clasesJueves = this.arrayHorario.filter((dia) => {
      return dia.dia.includes('Jueves');
    });
    this.horarioJueves = clasesJueves.map((horario) => {
      return this.getDiaYHora('Jueves', horario);
    });

    let clasesViernes = this.arrayHorario.filter((dia) => {
      return dia.dia.includes('Viernes');
    });
    this.horarioViernes = clasesViernes.map((horario) => {
      return this.getDiaYHora('Viernes', horario);
    });

    let clasesSabado = this.arrayHorario.filter((dia) => {
      return dia.dia.includes('Sabado');
    });
    this.horarioSabado = clasesSabado.map((horario) => {
      return this.getDiaYHora('Sabado', horario);
    });
  }

  getDiaYHora(dia: string, clases: Clase) {
    let h: Clase = new Clase();
    let diasSeparados = clases.dia.split(',');
    let posicion = diasSeparados.indexOf(dia);
    let horasSeparadas = clases.hora.split(',');
    let x = horasSeparadas[posicion];
    let y = x.split(':');
    let hora = y[0];
    h.materia = clases.materia;
    h.nombreMaestro = clases.nombreMaestro;
    h.apPaterno = clases.apPaterno;
    h.apMaterno = clases.apMaterno;
    h.dia = dia;
    h.hora = hora;
    h.idClase = clases.idClase;
    h.idMaestro = clases.idMaestro;
    return h;
  }

  concatenarArreglos() {
    this.arregloPrincipal = this.horarioLunes.concat(
      this.horarioMartes,
      this.horarioMiercoles,
      this.horarioJueves,
      this.horarioViernes,
      this.horarioSabado
    );
    this.arregloPrincipal.sort((a, b) => parseInt(a.hora) - parseInt(b.hora));

    const grupos = this.arregloPrincipal.reduce(
      (map: Map<string, Clase[]>, item: Clase) => {
        const { hora } = item;
        if (map.has(hora)) {
          map.get(hora)?.push(item);
        } else {
          map.set(hora, [item]);
        }
        return map;
      },
      new Map<string, Clase[]>()
    );

    for (const [key, value] of grupos.entries()) {
       let clases = new ClasePorHora(key);
      clases.horarios = value;
      this.clasePorHora.push(clases);
    }
  }
}
