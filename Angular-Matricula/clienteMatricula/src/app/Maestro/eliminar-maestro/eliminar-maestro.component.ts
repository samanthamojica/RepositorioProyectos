import { Component } from '@angular/core';
import { Maestro } from 'src/app/models/maestro';
import { OpAlumnoService } from '../../services/op-alumno.service';
import { OpMaestroService } from '../../services/op-maestro.service';

@Component({
  selector: 'app-eliminar-maestro',
  templateUrl: './eliminar-maestro.component.html',
  styleUrls: ['./eliminar-maestro.component.css'],
})
export class EliminarMaestroComponent {
  maestros: Maestro;
  listaMaestros: Array<Maestro> = [];
  nC: string;
  band :boolean;
  numCuenta: String;

  constructor(private opMaestroService: OpMaestroService) {}

  ngOnInit(): void {
    this.getMaestros();
  }

  getMaestros() {
    this.opMaestroService.getMaestros().subscribe((listaMaestros) => {
      this.listaMaestros = listaMaestros;
    });
  }

  eliminarMaestro() {
    this.opMaestroService.deleteMaestro(this.nC).subscribe((respuesta) => {
      if (respuesta ) {
        this.band = true;
      } else {
       this.band = false;
      }
    });
    this.getMaestros();
  }

  guardarNC(nC: string) {
    this.nC = nC;
  }
}
