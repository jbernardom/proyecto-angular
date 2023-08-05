import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface Busqueda {
   query: string;

}

export interface Informacion {

}
export interface InformacionFiltradaPagina {
   informacionFiltrarPagina: Informacion[]
}

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private shareBusqueda: BehaviorSubject<Busqueda> = new BehaviorSubject<Busqueda>({query: ''})

  constructor(private http: HttpClient) { }

  get queryBusqueda(){
    return this.shareBusqueda.asObservable();
  }

  set newQueryBusqueda(query: Busqueda){
    this.shareBusqueda.next(query);
  }

  cargarProductos(): Observable<InformacionFiltradaPagina>{
    const url = './assets/busqueda.json';
    return this.http.get<InformacionFiltradaPagina>(url);
  }

  cargarDatosProductos(query:string):Observable<Informacion[]> {
    return this.cargarProductos().pipe(
      map((data:InformacionFiltradaPagina) => {
        return data.informacionFiltrarPagina.filter(
          (infoList: Informacion) => infoList.titulo.includes(query)
        );
      })
    );
  }

}

