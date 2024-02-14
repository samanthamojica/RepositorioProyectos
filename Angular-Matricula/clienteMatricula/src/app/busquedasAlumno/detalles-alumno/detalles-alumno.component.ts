import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpAlumnoService } from '../../services/op-alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { Horario } from 'src/app/models/horario';
import { OpMateriaService } from '../../services/op-materia.service';
import { differenceInYears, parse } from 'date-fns';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css'],
})
export class DetallesAlumnoComponent {
  numeroCuenta: string;
  alumno: Alumno = new Alumno();
  horario: Horario[] = [];
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  band: boolean = false;
  edad:number;

  constructor(
    private ruta: ActivatedRoute,
    private opAlumnoService: OpAlumnoService,
    private opMateriaService: OpMateriaService
   
  ) {}

  ngOnInit(): void {
    this.numeroCuenta = this.ruta.snapshot.params['numeroCuenta'];
    this.getHorario();
    this.getAlumno();
  }

  getAlumno() {
    this.opAlumnoService.getAlumno(this.numeroCuenta).subscribe((alumnoRecibido) => {
        this.alumno = alumnoRecibido;
       this.calcularEdad();
      });
  }
  getHorario() {
    this.opMateriaService.getMateriasPorAlumno(this.numeroCuenta).subscribe((horarioRecibido) => {
        this.horario = horarioRecibido;
        if (this.horario.length != 0) {
           this.obtenerDias();
           this.band = true;
        }
      });
  }

calcularEdad(){
 const fechaN = this.alumno.fechaNacimientoA.toString();
  const fechaNacimiento = parse(fechaN, 'yyyy-MM-dd', new Date())
  this.edad = differenceInYears(new Date(), fechaNacimiento);

}

  obtenerDias() {
    let diasLunes = this.horario.filter((dia) => {
      return dia.dia.includes('Lunes');
    });

    this.horarioLunes = diasLunes.map((hora) => {
      return this.obtenerHorario(hora, 'Lunes');
    });

    let claseMartes = this.horario.filter((dia) => {
      return dia.dia.includes('Martes');
    });

    this.horarioMartes = claseMartes.map((horario) => {
      return this.obtenerHorario(horario, 'Martes');
    });

    let claseMiercoles = this.horario.filter((dia) => {
      return dia.dia.includes('Miercoles');
    });
    this.horarioMiercoles = claseMiercoles.map((horario) => {
      return this.obtenerHorario(horario, 'Miercoles');
    });

    let claseJueves = this.horario.filter((dia) => {
      return dia.dia.includes('Jueves');
    });

    this.horarioJueves = claseJueves.map((horario) => {
      return this.obtenerHorario(horario, 'Jueves');
    });

    let claseViernes = this.horario.filter((dia) => {
      return dia.dia.includes('Viernes');
    });

    this.horarioViernes = claseViernes.map((horario) => {
      return this.obtenerHorario(horario, 'Viernes');
    });

    let claseSabado = this.horario.filter((dia) => {
      return dia.dia.includes('Sabado');
    });

    this.horarioSabado = claseSabado.map((horario) => {
      return this.obtenerHorario(horario, 'Sabado');
    });
  }

  obtenerHorario(horario: Horario, dia: string) {
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
