import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() ingTotal;
  @Input() gasTotal;
  @Input() preTotal;
  @Input() porcentajeTotal;
 

  }

  
