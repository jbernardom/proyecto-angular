import { Component, OnInit } from '@angular/core';
import { Busqueda, BusquedaService } from '../servicios/busqueda.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{
  infos: Observable<Busqueda>;
  listado:any = [];

  buscar: any;
  constructor(private servicioBusqueda: BusquedaService) {
      this.infos = servicioBusqueda.queryBusqueda;
      this.servicioBusqueda.devolverListaFiltrada().suscribe((r:any)=>{
        this.listado = r;
      })
  }

  ngOnInit(): void {

  }

  search(query:any){
    this.servicioBusqueda.newQueryBusqueda = {query}
  }
}

