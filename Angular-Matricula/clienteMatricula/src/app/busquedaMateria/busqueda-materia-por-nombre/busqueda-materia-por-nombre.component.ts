import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpMateriaService } from '../../services/op-materia.service';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-busqueda-materia-por-nombre',
  templateUrl: './busqueda-materia-por-nombre.component.html',
  styleUrls: ['./busqueda-materia-por-nombre.component.css']
})
export class BusquedaMateriaPorNombreComponent {

  nombreMateria: string;
listaMateria : Array<Materia>= [];
nombreMateriaR:string;
delayTime: number = 10000;
band: boolean = false;

  constructor(private ruta : ActivatedRoute,
              private opMateriaService : OpMateriaService
    ){}
  
  
  ngOnInit(): void {
    this.nombreMateria = this.ruta.snapshot.params['nombreMateria'];   
    this.getMateriaPorNombre();       
  }

  getMateriaPorNombre(){
     this.opMateriaService.getMateriasPorNombre(this.nombreMateria).subscribe((listaMateriaR)=>{
       this.listaMateria = listaMateriaR;
       this.band = true;
       this.listaMateria[0].idMateria
        
    })

  }

}
