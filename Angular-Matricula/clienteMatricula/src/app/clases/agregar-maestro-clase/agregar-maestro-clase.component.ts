import { Component } from '@angular/core';
import { Maestro } from 'src/app/models/maestro';
import { OpMaestroService } from '../../services/op-maestro.service';
import { OpClaseService } from '../../services/op-clase.service';

@Component({
  selector: 'app-agregar-maestro-clase',
  templateUrl: './agregar-maestro-clase.component.html',
  styleUrls: ['./agregar-maestro-clase.component.css'],
})
export class AgregarMaestroClaseComponent {
  listaMaestros: Array<Maestro> = [];
  id: string;
  nombreMaestro: string;
  band: boolean;
  maestro:string

  constructor(
    private opMaestroService: OpMaestroService,
    private opClaseService: OpClaseService
  ) {}

  ngOnInit(): void {
    this.cargarMaestros();
  }

  cargarMaestros() {
    this.opMaestroService.getMaestros().subscribe((maestrosR) => {
      this.listaMaestros = maestrosR;
     
    });
  }

  agregarMaestro() {
    this.id =  (this.maestro.substring(0, 10));
    console.log("id: "+ this.id)
    this.nombreMaestro = this.maestro.substring(11);
    console.log("nombre maestro: "+ this.nombreMaestro)
   this.band= this.opClaseService.agregarMaestroAClase(this.id, this.nombreMaestro);
  }
}
