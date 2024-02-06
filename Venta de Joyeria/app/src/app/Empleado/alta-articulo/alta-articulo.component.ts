import { Component, defineInjectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anillo } from 'src/app/models/anillo';
import { AnillosService } from '../../servicios/anillos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  catalogo: FileList;
  archivosSeleccionados: File[];
  formData = new FormData();

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

  onArchivosSeleccionados(event: any) {
    
    const archivos = event.files;

    for (let i = 0; i < archivos.length; i++) {
      debugger
      const archivo = archivos[i];
      if (archivo.type.startsWith('image/')) {
        const lector = new FileReader();
        lector.onload = (e: any) => {
          this.arregloImagenes.push(e.target.result);
        };
      }
    }

    //
    this.archivosSeleccionados = event.target.files;
    this.cantidadImagenes = this.archivosSeleccionados.length;
    for (let i = 0; i < this.archivosSeleccionados.length; i++) {
      this.formData.append('archivos', this.archivosSeleccionados[i]);
    }
  }

  agragarAnillo() {
    //se van a agregar primero las imagenes
    this.anillosService
      .guardarAnillo(this.formData)
      .subscribe((mapRespuesta) => {
        if (mapRespuesta) {
          debugger;
          this.nuevoAnillo = this.fomularioAlta.value as Anillo;
        } else {
          console.log('No se pudo alamacenar la informacion');
        }
      });

    /*
    let formData = new FormData();

    this.nuevoAnillo = this.fomularioAlta.value as Anillo;
    debugger;
    for (let i = 0; i < this.catalogo.length; i++) {
      formData.append('catalogoImagenes', this.catalogo.item(i), this.catalogo.item(i).name );
   
    }
    const datos = {
      categoria: this.nuevoAnillo.categoria.toString(),
      nombreAnillo: this.nuevoAnillo.nombreAnillo.toString(),
      descripcion: this.nuevoAnillo.descripcion.toString(),
      precio: this.nuevoAnillo.precio.toString(),
      catalogoImagenes: this.catalogo,
    };

    //formData.append('anillo',  new Blob([JSON.stringify(datos)], { type: 'application/json' })  );

    const modalRef = this.modalService.open(ModalAltaComponent);
    try {
      await this.anillosService.guardarAnillo(formData);
      modalRef.componentInstance.mensaje = 'Información almacenada';
      debugger;
      this.fomularioAlta.reset();
    } catch (error) {
      modalRef.componentInstance.mensaje = 'No se pudó guardar la información';
      debugger;
    }

    */
  }
}
