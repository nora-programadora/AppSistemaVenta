import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Login } from '../Interfaces/login';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // private urlAPI: string = environment.endpoint + "Usuario/";

  // constructor(private http:HttpClient) { }

  // login(request: Login): Observable<ResponseApi> {
  //   return this.http.post<ResponseApi>(`${this.urlAPI}login`, request)
  // }

  // lista(): Observable<ResponseApi>{
  //   return this.http.get<ResponseApi>(`${this.urlAPI}lista`)
  // }

  // guardar(request: Usuario): Observable<ResponseApi> {
  //   return this.http.post<ResponseApi>(`${this.urlAPI}guardar`, request)
  // }

  // editar(request: Usuario): Observable<ResponseApi> {
  //   return this.http.put<ResponseApi>(`${this.urlAPI}Editar`, request)
  // }

  // eliminar(id: number): Observable<ResponseApi> {
  //   return this.http.delete<ResponseApi>(`${this.urlAPI}Eliminar/${id}`)
  // }
}
