import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  informeProductos = [
    {
      producto: `Tubo Figurado`,
      descripcion: `Tubo figurado de acuerdo a la muestra que nos traiga`,
      costo: `$ 300.000`,
      cantidad: 24
    }
  ];

  informeProductos1 = [
    {
      producto: `Manguera figurada`,
      descripcion: `Manguera figurada de caucho de alta temperatura para vehículos de trabajo pesado`,
      costo: `$ 80.000`,
      cantidad: 125
    }
  ];

  informeProductos2 = [
    {
      producto: `Racores`,
      descripcion: `Racores de todas las medidas en BSP y GIC para todas sus necesidades`,
      costo: `$ 40.000`,
      cantidad: 2495
    }
  ];
}
