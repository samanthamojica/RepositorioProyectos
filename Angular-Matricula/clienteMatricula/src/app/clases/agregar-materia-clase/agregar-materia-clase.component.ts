import { Component } from '@angular/core';
import { OpMateriaService } from '../../services/op-materia.service';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/models/materia';
import { OpClaseService } from '../../services/op-clase.service';
import { devOnlyGuardedExpression } from '@angular/compiler';

@Component({
  selector: 'app-agregar-materia-clase',
  templateUrl: './agregar-materia-clase.component.html',
  styleUrls: ['./agregar-materia-clase.component.css'],
})
export class AgregarMateriaClaseComponent {
  listaMaterias: Array<Materia>;
  value: number;
  id: number;
  nombreMateria: string;
  band: boolean;
  materia: string;
 

  constructor(
    private opMateriaService: OpMateriaService,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias() {
    this.opMateriaService.getMaterias().subscribe((materiasR) => {
      this.listaMaterias = materiasR;
    });
  }

  agregarMateria() {
    this.id = parseInt(this.materia.substring(0, 2));
    this.nombreMateria = this.materia.substring(6);   
    this.band = this.opClaseService.agregarMateriaAClase(this.id,this.nombreMateria);
  }
}
