import { Component, OnInit } from '@angular/core';
import { BusquedaService, Informacion } from '../servicios/busqueda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  info$: Observable<Informacion[]>;
  listado: Informacion[] = [];

  constructor(private servicioBusqueda: BusquedaService) {
    this.info$ = servicioBusqueda.devolverListaFiltrada();
  }

  ngOnInit(): void {
    this.servicioBusqueda.devolverListaFiltrada().subscribe((data: Informacion[]) => {
      this.listado = data;
    });
  }

  search(query: any) {
    if (query.trim() !== '') {
      this.servicioBusqueda.newQueryBusqueda = { query };
    } else {
      this.listado = [];
    }
  }
}
