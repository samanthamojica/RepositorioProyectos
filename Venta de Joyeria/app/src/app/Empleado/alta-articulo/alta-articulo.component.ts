import { Component } from '@angular/core';
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
  // imagen;
  catalogo: FileList;
  archivosSeleccionados: File[];
  formData = new FormData();
  precioNumber: number = 0;

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
    const archivos = event.target.files;
    for (let i = 0; i < archivos.length; i++) {
      const archivo = archivos[i];
      if (archivo.type.startsWith('image/')) {
        const lector = new FileReader();
        lector.onload = (e: any) => {
          this.arregloImagenes.push(e.target.result);
        };
        lector.readAsDataURL(archivo);
      }
    }

    //Subir archivos a BUCKET S3
    this.archivosSeleccionados = event.target.files;
    this.cantidadImagenes = this.archivosSeleccionados.length;
    for (let i = 0; i < this.archivosSeleccionados.length; i++) {
      this.formData.append('archivos', this.archivosSeleccionados[i]);
    }
  }

  agragarAnillo() {
    //se van a agregar primero las imagenes
    this.anillosService
      .saveImagenesEnBucket(this.formData)
      .subscribe((mapRespuesta) => {
        if (mapRespuesta) {
          this.nuevoAnillo = this.fomularioAlta.value as Anillo;
          this.nuevoAnillo.catalogoImagenes = mapRespuesta;
          console.log(typeof this.nuevoAnillo.catalogoImagenes);
          debugger;
       //   console.log(this.nuevoAnillo);
        //  console.log(         '***************************************************************'     );
          this.anillosService
            .saveAnilloBD(this.nuevoAnillo)
            .subscribe((anilloAlmacenado) => {
              //console.log(anilloAlmacenado);
            });
          debugger;
        } else {
          console.log('No se pudo alamacenar la informacion');
        }
      });

  }
}
