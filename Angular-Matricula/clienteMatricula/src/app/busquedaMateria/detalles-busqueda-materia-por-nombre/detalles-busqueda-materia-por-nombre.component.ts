import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpClaseService } from '../../services/op-clase.service';
import { Materia } from 'src/app/models/materia';
import { Horario } from 'src/app/models/horario';

@Component({
  selector: 'app-detalles-busqueda-materia-por-nombre',
  templateUrl: './detalles-busqueda-materia-por-nombre.component.html',
  styleUrls: ['./detalles-busqueda-materia-por-nombre.component.css'],
})
export class DetallesBusquedaMateriaPorNombreComponent {
  idMateria: number = 0;
  listaMaterias: Materia[]=[];
  nombreMateria: string;
  horarioLunes: Horario[] = [];
  horarioMartes: Horario[] = [];
  horarioMiercoles: Horario[] = [];
  horarioJueves: Horario[] = [];
  horarioViernes: Horario[] = [];
  horarioSabado: Horario[] = [];
  band: boolean = false;
  bandLunes: boolean;
  bandMartes: boolean;
  bandMiercoles: boolean;
  bandJueves: boolean;
  bandViernes: boolean;
  bandSabado: boolean;
  band2: boolean = false;

  constructor(
    private ruta: ActivatedRoute,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.idMateria = this.ruta.snapshot.params['idMateria'];
    this.getClasesPorMateria();
       }

  getClasesPorMateria() {
   
    this.opClaseService.getClasesPorMateria(this.idMateria).subscribe((listaMateriasR) => {
        this.listaMaterias = listaMateriasR;
        if (this.listaMaterias.length != 0) {
       
          this.band = true;
          this.nombreMateria = this.listaMaterias[0].nombreMateria;
          this.getHorario();
        } 
      });
    
  }

 

  getHorario() {
    debugger
    let claseLunes = this.listaMaterias.filter((dia) => {
      return dia.horarioDia.includes('Lunes');
      
    });

    this.horarioLunes = claseLunes.map((horario) => {
      return this.getDiaYHora(horario, 'Lunes');
    });
    console.log(this.horarioLunes.length != 0);

    let claseMartes = this.listaMaterias.filter((dia) => {
      return dia.horarioDia.includes('Martes');
    });

    this.horarioMartes = claseMartes.map((horarios) => {
      return this.getDiaYHora(horarios, 'Martes');
    });

    let claseMiercoles = this.listaMaterias.filter((dia) => {
      return dia.horarioDia.includes('Miercoles');
    });

    this.horarioMiercoles = claseMiercoles.map((horario) => {
      return this.getDiaYHora(horario, 'Miercoles');
    });

    let claseJueves = this.listaMaterias.filter((dia) => {
      return dia.horarioDia.includes('Jueves');
    });

    this.horarioJueves = claseJueves.map((horario) => {
      return this.getDiaYHora(horario, 'Jueves');
    });

    let claseViernes = this.listaMaterias.filter((dia) => {
      return dia.horarioDia.includes('Viernes');
    });

    this.horarioViernes = claseViernes.map((horario) => {
      return this.getDiaYHora(horario, 'Viernes');
    });

    let claseSabado = this.listaMaterias.filter((dia) => {
      return dia.horarioDia.includes('Sabado');
    });

    this.horarioSabado = claseSabado.map((horario) => {
      return this.getDiaYHora(horario, 'Sabado');
    });
  }

  getDiaYHora(clase: Materia, dia: string) {
    let horario = new Horario();
    let diasSeparados = clase.horarioDia.split(',');
    let pos = diasSeparados.indexOf(dia);
    let horasSeparadas = clase.horarioHora.split(',');
    let horaClase = horasSeparadas[pos];
    horario.dia = dia;
    horario.hora = horaClase;
    horario.materia = clase.nombreMateria;
    
    return horario;
  }
}
