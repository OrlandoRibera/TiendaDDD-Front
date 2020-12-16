import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cliente } from '../models/Cliente';

const url = `${environment.url_soporte}/api/Client`;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class ClientService {

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
}
