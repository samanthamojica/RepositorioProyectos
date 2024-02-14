import { Component } from '@angular/core';
import { Horario } from 'src/app/models/horario';
import { OpClaseService } from '../../services/op-clase.service';

@Component({
  selector: 'app-agregar-horario-clase',
  templateUrl: './agregar-horario-clase.component.html',
  styleUrls: ['./agregar-horario-clase.component.css'],
})
export class AgregarHorarioClaseComponent {
  arregloHorario: Array<Horario> = [];
  band: boolean;
  dias: Array<Horario> = [
    { statusDia: false, dia: 'Lunes', hora: '' , materia:'', idClase:''},
    { statusDia: false, dia: 'Martes', hora: '', materia:'', idClase:'' },
    { statusDia: false, dia: 'Miercoles', hora: '', materia:'', idClase:'' },
    { statusDia: false, dia: 'Jueves', hora: '', materia:'', idClase:'' },
    { statusDia: false, dia: 'Viernes', hora: '', materia:'', idClase:'' },
    { statusDia: false, dia: 'Sabado', hora: '', materia:'', idClase:'' },
  ];
  private nombreMaestro : string;
	private apPaterno: string;
	private apMaterno: string;
	private idClase: number;


  listaHoras: string[] = [
    '7:00 a.m. - 8:00 a.m.',
    '8:00 a.m. - 9:00 a.m.',
    '9:00 a.m. - 10:00 a.m.',
    '10:00 a.m. - 11:00 a.m.',
    '11:00 a.m. - 12:00 p.m.',
    '12:00 p.m. - 13:00 p.m',
    '13:00 p.m. - 14:00 p.m.',
    '14:00 p.m. - 15:00 p.m.',
    '15:00 p.m. - 16:00 p.m.',
    '16:00 p.m. - 17:00 p.m.',
    '17:00 p.m. - 18:00 p.m.',
    '18:00 p.m. - 19:00 p.m.',
    '19:00 p.m. - 20:00 p.m.',
    '20:00 p.m. - 21:00 p.m.',
  ];
  constructor(private opClaseService: OpClaseService) {}

  ngOnInit(): void {}

  agregarDiaPrueba() {
    for (let index = 0; index < this.dias.length; index++) {
      if (this.dias[index].statusDia) {
        const horario: Horario = new Horario();
        horario.statusDia = this.dias[index].statusDia;
        horario.dia = this.dias[index].dia;
        horario.hora = this.dias[index].hora;
        this.arregloHorario.push(horario);
      }
    }

    this.band = this.opClaseService.agregarHorario(this.arregloHorario);
  }
}
