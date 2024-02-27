import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anillo } from 'src/app/models/anillo';
import { AnillosService } from '../../servicios/anillos.service';
import { CategoriasAnillosService } from 'src/app/servicios/categorias-anillos.service';
import { CategoriasAnillos } from 'src/app/models/categorias-anillos';

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
  catalogo: FileList;
  archivosSeleccionados: File[];
  formData = new FormData();
  precioNumber: number = 0;
  arregloCategorias: CategoriasAnillos[];
 
  constructor(
    private formBuilder: FormBuilder,
    private anillosService: AnillosService,
    private categoriasAnillosService: CategoriasAnillosService
  ) {}

  ngOnInit(): void {
    this.obtenerCategorias();
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

  obtenerCategorias() {
    this.categoriasAnillosService
      .obtenerCategoriasAnillos()
      .subscribe((resultado) => {
        this.arregloCategorias = resultado;
      });
  }

  agragarAnillo(event: any) {
    //se van a agregar primero las imagenes
    this.anillosService.saveImagenesEnBucket(this.formData).subscribe((mapRespuesta) => {
        if (mapRespuesta) {
          this.nuevoAnillo = this.fomularioAlta.value as Anillo;
          this.nuevoAnillo.catalogoImagenes = mapRespuesta;
          this.anillosService .saveAnilloBD(this.nuevoAnillo) .subscribe((anilloAlmacenado) => {
              console.log('Se almaceno correctamente la informacion');
            });
          debugger;
        } else {
          console.log('No se pudo alamacenar la informacion');
        }
      });
  }
}
