import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './Global';


@Injectable({
  providedIn: 'root'
})

export class ClientService {

  public url; 
  constructor(
    private _http:HttpClient,
  ) {
    this.url = GLOBAL.url
  };

  listar_cliente_filtro_admin(tipo:any, filtro:any ):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url+'/listar_cliente_filtro_admin/'+tipo+'/'+filtro, {headers:headers});
    // return this._http.get(`${this.url}/listar_cliente_filtro_admin/${tipo}/${filtro}`, {headers:headers});
  };

}
