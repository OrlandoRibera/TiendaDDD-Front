import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = `${environment.url_soporte}/api/Product`;
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  getAll(): Observable<any> {
    return this._httpClient.get(url, { headers })
  }

  getById(id): Observable<any> {
    return this._httpClient.get(url + `/${id}`, { headers });
  }

}
