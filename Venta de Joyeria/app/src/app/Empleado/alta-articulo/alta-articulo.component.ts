import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anillo } from 'src/app/models/anillo';
import { AnillosService } from '../../servicios/anillos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAltaComponent } from 'src/app/modal/modal-alta/modal-alta.component';

@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css'],
})
export class AltaArticuloComponent {
  fomularioAlta: FormGroup;
  nuevoAnillo: Anillo;
  band = false;

  constructor(
    private formBuilder: FormBuilder,
    private anillosService: AnillosService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.fomularioAlta = this.formBuilder.group({
      nombreAnillo: [''],
      descripcion: [''],
      categoria: [''],
      precio: [''],
      catalogoImagenes:['']
    });
  }

  async agragarAnillo() {
    this.nuevoAnillo = this.fomularioAlta.value as Anillo;
    const modalRef = this.modalService.open(ModalAltaComponent);
    try {
      await this.anillosService.guardarAnillo(this.nuevoAnillo);
      modalRef.componentInstance.mensaje = 'Información almacenada';
      debugger;
      this.fomularioAlta.reset();
    } catch (error) {
      modalRef.componentInstance.mensaje = 'No se pudó guardar la información';
      debugger;
    }
  }
}
