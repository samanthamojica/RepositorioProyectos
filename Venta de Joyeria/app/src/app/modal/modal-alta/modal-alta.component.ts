import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-alta',
  templateUrl: './modal-alta.component.html',
  styleUrls: ['./modal-alta.component.css']
})
export class ModalAltaComponent {
  @Input() mensaje: string;

  constructor(public activeModal: NgbActiveModal){}

  cerrarModal() {
    this.activeModal.close('Modal cerrado');
  }

}
