import { Injectable } from '@angular/core';
import { Anillo } from '../models/anillo';

@Injectable({
  providedIn: 'root',
})
export class AnillosService {
  anillos: Anillo[] = [
    new Anillo(
      'A001',
      'anillo',
      'Anillo serenidad',
      'Cada anillo que presenta es un testimonio de una artesanía excepcional y una belleza atemporal.',
      'anillo',
      50,
      'oro',
      'assets/CategoriasAnillos/anillos/A001/anillo1.png',
      [
        'assets/CategoriasAnillos/anillos/A001/anillo1.png',
        'assets/CategoriasAnillos/anillos/A001/A001-1.png',
        'assets/CategoriasAnillos/anillos/A001/A001-2.png',
        'assets/CategoriasAnillos/anillos/A001/A001-3.png',
      ],
      5
    ),
    new Anillo(
      'A002',
      'anillo',
      'Anillo Perseverancia',
      'El anillo "Perseverancia" es una elegante pieza de joyería que simboliza la determinación y la constancia.',
      'anillo',
      80,
      'oro',
      'assets/CategoriasAnillos/anillos/A002/anillo2.png',
      [
        'assets/CategoriasAnillos/anillos/A002/anillo2.png',
        'assets/CategoriasAnillos/anillos/A002/A002-1.png',
        'assets/CategoriasAnillos/anillos/A002/A002-2.png',
        'assets/CategoriasAnillos/anillos/A002/A002-3.png',
      ],
      1
    ),
    new Anillo(
      'A003',
      'anillo',
      'Elegancia Dorada',
      'sugiere la belleza y sofisticación de los anillos de oro, al tiempo que destaca su aspecto brillante y delgado',
      'TIPO',
      140,
      'Oro',
      'assets/CategoriasAnillos/anillos/A003/anillo3.png',
      [
        'assets/CategoriasAnillos/anillos/A003/anillo3.png',
        'assets/CategoriasAnillos/anillos/A003/A003-1.png',
        'assets/CategoriasAnillos/anillos/A003/A003-2.png',
        'assets/CategoriasAnillos/anillos/A003/A003-3.png',
      ],
      9
    ),

    new Anillo(
      'AC001',
      'anillo',
      'Elegancia Floral',
      ' Obra maestra de la joyería que combina la belleza natural de las flores con la elegancia atemporal del metal precioso.',
      'compromiso',
      100,
      'Oro',
      'assets/CategoriasAnillos/anillosCompromiso/AC001/anilloCompromiso.png',
      [
        'assets/CategoriasAnillos/anillosCompromiso/AC001/anilloCompromiso.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC001/AC001-1.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC001/AC001-2.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC001/AC001-4.png',
      ],
      15
    ),

    new Anillo(
      'AC002',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'Compromiso',
      200,
      'Oro amarillo',
      'assets/CategoriasAnillos/anillosCompromiso/AC002/anilloCompromiso2.png',
      [
        'assets/CategoriasAnillos/anillosCompromiso/AC002/anilloCompromiso2.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC002/AC002-1.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC002/AC002-2.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC002/AC002-4.png',
      ],
      8
    ),
    new Anillo(
      'AC003',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'Compromiso',
      200,
      'Oro amarillo',
      'assets/CategoriasAnillos/anillosCompromiso/AC003/anilloCOmpromiso3.png',
      [
        'assets/CategoriasAnillos/anillosCompromiso/AC003/anilloCompromiso3.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC003/AC003-1.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC003/AC003-2.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC003/AC003-4.png',
      ],
      7
    ),

    new Anillo(
      'AC004',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'Compromiso',
      200,
      'Oro amarillo',
      'assets/CategoriasAnillos/anillosCompromiso/AC004/anilloCompromiso04.png',
      [
        'assets/CategoriasAnillos/anillosCompromiso/AC004/anilloCompromiso04.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC004/AC004-1.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC004/AC004-2.png',
        'assets/CategoriasAnillos/anillosCompromiso/AC004/AC004-4.png',
      ],
      11
    ),
    new Anillo(
      'AF001',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'floral',
      200,
      'Oro amarillo',
      'assets/CategoriasAnillos/anillosFlores/AF001/AF001.png',
      [
        'assets/CategoriasAnillos/anillosFlores/AF001/AF001.png',
        'assets/CategoriasAnillos/anillosFlores/AF001/AF001-1.png',
        'assets/CategoriasAnillos/anillosFlores/AF001/AF001-2.png',
        'assets/CategoriasAnillos/anillosFlores/AF001/AF001-3.png',
      ],
      6
    ),

    new Anillo(
      'AF002',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'floral',
      200,
      'Oro amarillo',
      'assets/CategoriasAnillos/anillosFlores/AF002/AF002.png',
      [
        'assets/CategoriasAnillos/anillosFlores/AF002/AF002.png',
        'assets/CategoriasAnillos/anillosFlores/AF002/AF002-1.png',
        'assets/CategoriasAnillos/anillosFlores/AF002/AF002-2.png',
        'assets/CategoriasAnillos/anillosFlores/AF002/AF002-3.png',
      ],
      4
    ),

    new Anillo(
      'AF003',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'floral',
      200,
      'Oro amarillo',
      'assets/CategoriasAnillos/anillosFlores/AF003/AF003.png',
      [
        'assets/CategoriasAnillos/anillosFlores/AF003/AF003.png',
        'assets/CategoriasAnillos/anillosFlores/AF003/AF003-1.png',
        'assets/CategoriasAnillos/anillosFlores/AF003/AF003-2.png',
        'assets/CategoriasAnillos/anillosFlores/AF003/AF003-3.png',
      ],
      10
    ),

    new Anillo(
      'AT001',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'tematico',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/AT001/AT001.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/AT001/AT001.png',
        'assets/CategoriasAnillos/anillosTematicos/AT001/AT001-1.png',
        'assets/CategoriasAnillos/anillosTematicos/AT001/AT001-2.png',
        'assets/CategoriasAnillos/anillosTematicos/AT001/AT001-3.png',
      ],
      36
    ),
    new Anillo(
      'AT002',
      'anillo',
      'Eterna Promesa',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'floral',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/AT002/AT002.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/AT002/AT002.png',
        'assets/CategoriasAnillos/anillosTematicos/AT002/AT002-1.png',
        'assets/CategoriasAnillos/anillosTematicos/AT002/AT002-2.png',
        'assets/CategoriasAnillos/anillosTematicos/AT002/AT002-3.png',
      ],
      12
    ),
    new Anillo(
      'AT003',
      'anillo',
      'Aurora',
      'Un anillo que captura la magia del momento en que Aurora despierta de su largo sueño, con un diseño delicado y elegante.',
      'Tematico',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT003/AT003.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT003/AT003.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT003/AT003-1.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT003/AT003-2.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT003/AT003-3.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT003/AT003-4.png',
      ],
      21
    ),
    new Anillo(
      'AT004',
      'anillo',
      'Rosas en Flor',
      ' Inspirado en las icónicas rosas del cuento de hadas, este anillo presenta un diseño floral y romántico que recuerda la historia de Aurora.',
      'Tematico',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT004/AT004.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT004/AT004.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT004/AT004-1.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT004/AT004-2.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT004/AT004-3.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT004/AT004-4.png',
      ],
      25
    ),
    new Anillo(
      'AT005',
      'anillo',
      'Aurora Despertar',
      'Este anillo refleja la belleza y la gracia de la Princesa Aurora mientras soñaba en su castillo.',
      'Tematico',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT005/AT005.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT005/AT005.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT005/AT005-1.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT005/AT005-2.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT005/AT005-3.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Aurora/AT005/AT005-4.png',
      ],
      17
    ),
    new Anillo(
      'AT006',
      'anillo',
      'Jazmin Encantador',
      'Un anillo que refleja la belleza y encanto de la Princesa Jazmín, con detalles elegantes y un toque de misterio.',
      'Tematico',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/princesas/Jazmin/AT006/AT006.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/princesas/Jazmin/AT006/AT006.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Jazmin/AT006/AT006-1.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Jazmin/AT006/AT006-2.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Jazmin/AT006/AT006-3.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Jazmin/AT006/AT006-4.png',
      ],
      13
    ),
    new Anillo(
      'AT007',
      'anillo',
      'Valiente',
      'Con un diseño clásico y un diamante de corte brillante, este anillo simboliza una promesa eterna de amor y compromiso.',
      'Tematico',
      200,
      'Oro rosa',
      'assets/CategoriasAnillos/anillosTematicos/princesas/Valiente/AT007/AT007.png',
      [
        'assets/CategoriasAnillos/anillosTematicos/princesas/Valiente/AT007/AT007.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Valiente/AT007/AT007-1.png',
        'assets/CategoriasAnillos/anillosTematicos/princesas/Valiente/AT007/AT007-3.png',
      ],
      3
    ),
  ];

  constructor() {}
  ngOnInit(): void {}

  obtenerInformacionAnillo(idAnillo: string) {
    debugger
    let infoAnillo: Anillo;
    for (let i = 0; i < this.anillos.length; i++) {
      if ((this.anillos[i].idAnillo == idAnillo)) {
        infoAnillo = this.anillos[i];
       /*  break; */
        debugger
      }
    }
    return infoAnillo;
   /*  console.log(infoAnillo); */
    debugger
  }
}
