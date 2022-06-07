import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private apiUrlVDos: string = 'https://restcountries.com/v2'

  get paramsGrales() {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.paramsGrales });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.paramsGrales });
  }

  getPaisPorCodigo(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const paramsRegion = new HttpParams().set('fields', 'name,capital,cca2,flags,population');

    const url = `${this.apiUrlVDos}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: paramsRegion }).pipe(tap(console.log))
  }
}
