import { Component, Input } from '@angular/core';
import { ClasePorHora } from 'src/app/models/clasesPorHora';

@Component({
  selector: 'app-imprimir-horario',
  templateUrl: './imprimir-horario.component.html',
  styleUrls: ['./imprimir-horario.component.css'],
})
export class ImprimirHorarioComponent {


  @Input() clasePorHora: ClasePorHora[]= new Array<ClasePorHora>();
  @Input() dias: string[] = [];
  @Input() titulo:string= ''

  ngOnInit(): void { }
}
