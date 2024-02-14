import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Materia } from 'src/app/models/materia';
import { OpMateriaService } from '../../services/op-materia.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css'],
})
export class AgregarMateriaComponent {
  formularioRegistro: FormGroup;
  titulo: string = 'Agregar Materia';
  materia: Materia;
  band: boolean;
  nombreM: string;

  constructor(
    private opMateriaService: OpMateriaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formularioRegistro = this.formBuilder.group({
      nombreMateria: ['', Validators.required],
      gradoMateria: ['', Validators.required],
    });
  }

  agregarMatricula() {
    this.materia = this.formularioRegistro.value as Materia;
    this.opMateriaService.agregarMateria(this.materia).subscribe(
      (materiaRecibida) => {
        if (materiaRecibida) {
          this.band = true;
          this.nombreM = this.materia.nombreMateria;
        } else {
          this.band = false;
        }
      });
  }
}
