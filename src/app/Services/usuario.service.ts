import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Login } from '../Interfaces/login';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   private usuarios: Usuario[] = [
    {
    idUsuario: 1,
    nombreCompleto: 'Juan Pérez',
    correo: 'juan@example.com',
    idRol: 1,
    rolDescripcion: 'Administrador',
    clave: 'clave123',
    esActivo: 1
  },
  {
    idUsuario: 2,
    nombreCompleto: 'María López',
    correo: 'maria@example.com',
    idRol: 2,
    rolDescripcion: 'Usuario',
    clave: 'password456',
    esActivo: 1
  },
  {
    idUsuario: 3,
    nombreCompleto: 'Carlos González',
    correo: 'carlos@example.com',
    idRol: 2,
    rolDescripcion: 'Usuario',
    clave: 'miClave',
    esActivo: 0
  }
  ];

  private urlAPI: string = environment.endpoint + "Usuario/";

  constructor(private http:HttpClient) { }

  login(request: Login): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlAPI}login`, request)
  }

  // lista(): Observable<ResponseApi>{
  //   return this.http.get<ResponseApi>(`${this.urlAPI}lista`)
  // }
  lista(): Observable<ResponseApi> {
    const response: ResponseApi = {
      status: true,
      value: this.usuarios,
      msg: 'Lista de usuarios obtenida exitosamente' 
    };
    return of(response);
  }
  
  guardar(request: Usuario): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlAPI}guardar`, request)
  }

  editar(request: Usuario): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlAPI}Editar`, request)
  }

  eliminar(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlAPI}Eliminar/${id}`)
  }
}
