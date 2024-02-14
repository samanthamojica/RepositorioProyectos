import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maestro } from 'src/app/models/maestro';
import { OpMaestroService } from 'src/app/services/op-maestro.service';

@Component({
  selector: 'app-eliminar-maestro-num-cuenta',
  templateUrl: './eliminar-maestro-num-cuenta.component.html',
  styleUrls: ['./eliminar-maestro-num-cuenta.component.css'],
})
export class EliminarMaestroNumCuentaComponent {
  numCuenta: String;
  error: boolean;
  maestro: Maestro =  new Maestro();
  band: boolean; 

  constructor(
    private ruta: ActivatedRoute,
    private opMaestroService: OpMaestroService
  ) 
  {
    this.numCuenta = this.ruta.snapshot.params['numCuenta'];
    this.obtenerNCuenta();
  }

  ngOnInit(): void {
    this.obtenerNCuenta();
  }

  obtenerNCuenta() {
    if (this.numCuenta == 'undefined') {
      this.error = true;
    } else {
      this.error = false;
      this.getMaestro()
    }
  }

  getMaestro() {
    this.opMaestroService
      .getMaestro(this.numCuenta)
      .subscribe((maestroRecibido) => {
        this.maestro = maestroRecibido;
        console.log('nombre del maestro ' + this.maestro.nombreMaestro);
        console.log('apellidos del maestros ' + this.maestro.apMaternoM);
      });
  }

  eliminarMaestro() {
    this.opMaestroService.deleteMaestro(this.numCuenta).subscribe((r) => {
      if (r) {
        this.band = true;
      } else {
        this.band = false;
      }
    });
  }
}
