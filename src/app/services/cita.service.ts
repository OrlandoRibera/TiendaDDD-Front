import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = `${environment.url_soporte}/api/Appointment`;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class CitaService {

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

  cancelOne(id: string): Observable<any> {
    return this._httpClient.post(url + '/cancelAppointment', { Id: id }, { headers });
  }
}
