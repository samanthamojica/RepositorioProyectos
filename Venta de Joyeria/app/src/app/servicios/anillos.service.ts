import { Injectable } from '@angular/core';
import { Anillo } from '../models/anillo';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  anillos: Anillo[] = [
    new Anillo(
      'Anillo serenidad',
      'Cada anillo que presenta es un testimonio de una artesanía excepcional y una belleza atemporal.',
      50,
      'oro',
      '/assets/anillos/anillo1'
    ),
    new Anillo(
      'Anillo Perseverancia',
      'El anillo "Perseverancia" es una elegante pieza de joyería que simboliza la determinación y la constancia.',
      80,
      'oro',
      '/assets/anillos/anillo2'
    ),
    new Anillo(
      'Elegancia Dorada',
      'sugiere la belleza y sofisticación de los anillos de oro, al tiempo que destaca su aspecto brillante y delgado',
      140,
      'Oro',
      '/assets/anillos/juego-5-anillo-png'
    ),
    new Anillo(
      'Elegancia Floral',
      ' Obra maestra de la joyería que combina la belleza natural de las flores con la elegancia atemporal del metal precioso.',
      100,
      'Oro',
      '/assets/anillos/anilloFloresJuego3.png'
    ),
  ];

  constructor() {}
}
