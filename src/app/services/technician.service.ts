import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const url = `${environment.url_soporte}/api/Technician`;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

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
