import { Injectable } from '@angular/core';
import { Anillo } from '../models/anillo';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  anillos: Anillo[] = [
    new Anillo(
      '01A',
      'anillo',
      'Anillo serenidad',
      'Cada anillo que presenta es un testimonio de una artesanía excepcional y una belleza atemporal.',
      'TIPO',
      50,
      'oro',
      '/assets/anillos/anillo1.png',
      [
        '/assets/anillos/anillo1.png',
        '/assets/anillos/01A/01A001.png',
        '/assets/anillos/01A/01A002.png',
        '/assets/anillos/01A/01A003.png',
      ],
      5
    ),

    /* 
    new Anillo(
      '02A',
      'anillo',
      'Anillo Perseverancia',
      'El anillo "Perseverancia" es una elegante pieza de joyería que simboliza la determinación y la constancia.',
      'TIPO',
      80,
      'oro',
      '/assets/anillos/anillo2.png',
      1
    ),
    new Anillo(
      '03A',
      'anillo',
      'Elegancia Dorada',
      'sugiere la belleza y sofisticación de los anillos de oro, al tiempo que destaca su aspecto brillante y delgado',
      'TIPO',
      140,
      'Oro',
      '/assets/anillos/juego-5-anillos.png',
      1
    ),
    new Anillo(
      '04A',
      'anillo',
      'Elegancia Floral',
      ' Obra maestra de la joyería que combina la belleza natural de las flores con la elegancia atemporal del metal precioso.',
      'TIPO',
      100,
      'Oro',
      '/assets/anillos/anilloFloresJuego3.png',
      3
    ),
    new Anillo(
      '05A',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'Compromiso',
      200,
      'Oro amarillo',
      '/assets/anillosCompromiso/anilloCompromiso.png',
      2
    ),
    new Anillo(
      '06A',
      'anillo',
      'Aurora Brillante',
      'Simboliza la belleza y la maravilla de un amor único.',
      'Compromiso',
      200,
      'Oro Amarillo',
      '/assets/anillosCompromiso/anilloCOmpromiso3.png',
      6
    ),
    new Anillo(
      '07A',
      'anillo',
      'Rosa Romance',
      ' Inspirado en la delicada belleza de una rosa, este anillo de compromiso presenta un diamante en forma de rosa en el centro. Evoca la pureza y la pasión del amor.',
      'Compromiso',
      180,
      'Oro Amarillo',
      '/assets/anillosTematicos/anilloTematico5.png',
      0
    ), */
  ];

  constructor() {}
  ngOnInit(): void {}

  obtenerInformacionAnillo(idAnillo: string) {
    let infoAnillo: Anillo;
    for (let i = 0; i < this.anillos.length; i++) {
      if ((this.anillos[i].idAnillo = idAnillo)) {
        infoAnillo = this.anillos[i];
      }
    }
    return infoAnillo;
  }
}
