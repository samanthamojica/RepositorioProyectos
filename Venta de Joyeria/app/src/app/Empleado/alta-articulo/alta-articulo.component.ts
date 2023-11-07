import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anillo } from 'src/app/models/anillo';
import { AnillosService } from '../../servicios/anillos.service';

@Component({
  selector: 'app-alta-articulo',
  templateUrl: './alta-articulo.component.html',
  styleUrls: ['./alta-articulo.component.css'],
})
export class AltaArticuloComponent {
  fomularioAlta: FormGroup;
  nuevoAnillo: Anillo ;

  constructor(private formBuilder: FormBuilder,
              private anillosService :AnillosService    ) {}

  ngOnInit(): void {
   
    this.crearFormulario(); 
  }

  crearFormulario() {
    this.fomularioAlta = this.formBuilder.group({
      idAnillo: [''],
      nombreAnillo: [''],
      descripcion: [''],
      categoria: [''],
      precio: [''],
    });
  }

  agragarAnillo(){
    this.nuevoAnillo = this.fomularioAlta.value as Anillo;
    debugger
    this.anillosService.guardarAnillo(this.nuevoAnillo).subscribe((anillo)=>{
      if(anillo){
        console.log("Se guardo anillo");
        debugger
      }else{
        console.log("No se guardo el anillo");
      }
    });
    this.fomularioAlta.reset();


  }
}
