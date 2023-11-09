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
  cantidadImagenes: number = 0;
  rutaImagen = '/assets/imgNoDisponible.jpg';
  arregloImagenes = [];
  imagen;
  catalogo: Blob[];

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
      catalogoImagenes: [''],
    });
  }

  seleccionarImagenes(event) {
    //  debugger
    /*   console.log(event.target.files); */
    this.cantidadImagenes = event.target.files.length;
    //voy a verificar que si tenga imagenes en mi arreglo
    let imagenes = event.target.files;
    this.catalogo = event.target.files;
    // this.nuevoAnillo = event.target.files;
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        //leer el file y cargar la imagen
        let reader = new FileReader();
        reader.readAsDataURL(imagenes[i]);
        //El dataUrl es el que maneja el BLOB, binary large Object
        reader.onload = (event: any) => {
          this.rutaImagen = event.target.result;
          this.arregloImagenes.push(this.rutaImagen);
          //    debugger
        };
      }
      this.imagen = imagenes;
      //  console.log(this.imagen)
      //   debugger
    }

    //  debugger;
  }

  async agragarAnillo() {
    this.nuevoAnillo = this.fomularioAlta.value as Anillo;
    this.nuevoAnillo.catalogoImagenes = this.catalogo;
    // console.log(this.nuevoAnillo);
    //debugger;
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
