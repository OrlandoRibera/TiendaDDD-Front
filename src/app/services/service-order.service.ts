import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenServicio } from '../models/OrdenServicio';

const url = `${environment.url_soporte}/api/ServiceOrder`;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this._httpClient.get(url, { headers })
  }

  getById(id): Observable<any> {
    return this._httpClient.get(url + `/${id}`, { headers });
  }

  insertOne(obj: any) {
    return this._httpClient.post(url, obj, { headers });
  }

  cancelOne(id): Observable<any> {
    const params = {
      Id: id
    };
    return this._httpClient.post(url + '/cancelServiceOrder', params, { headers });
  }
}
