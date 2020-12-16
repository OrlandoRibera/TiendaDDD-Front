import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = `${environment.url_soporte}/api/OrdenEntrega`;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class OrdenEntregaService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this._httpClient.get(url, { headers })
  }

  getById(id): Observable<any> {
    return this._httpClient.get(url + `/${id}`, { headers });
  }

  insertOne(obj): Observable<any> {
    return this._httpClient.post(url, obj, { headers });
  }

  consolidar(obj): Observable<any> {
    return this._httpClient.post(url + '/consolidarOrdenEntrega', obj, { headers });
  }

  finalizar(id): Observable<any> {
    return this._httpClient.post(url + '/finalizarOrdenEntrega', { Id: id }, { headers });
  }

  anular(id): Observable<any> {
    return this._httpClient.post(url + '/anularOrdenEntrega', { Id: id }, { headers });
  }

  iniciarViaje(id): Observable<any> {
    return this._httpClient.post(url + '/iniciarViaje', { Id: id }, { headers });
  }

  finalizarViaje(id): Observable<any> {
    return this._httpClient.post(url + '/finalizarViaje', { Id: id }, { headers });
  }

  iniciarSeguimiento(obj): Observable<any> {
    return this._httpClient.post(url + '/insertarSeguimiento', obj, { headers });
  }

}
