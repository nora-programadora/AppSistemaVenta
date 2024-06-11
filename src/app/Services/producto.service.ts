import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
      { idProducto: 1, nombre: 'Producto 1', idCategoria: 1, descripcionCategoria: 'Categoría 1', stock: 10, precio: '100.00', esActivo: 1 },
      { idProducto: 2, nombre: 'Producto 2', idCategoria: 2, descripcionCategoria: 'Categoría 2', stock: 20, precio: '200.00', esActivo: 1 },
      { idProducto: 3, nombre: 'Producto 3', idCategoria: 3, descripcionCategoria: 'Categoría 3', stock: 30, precio: '300.00', esActivo: 0 },
  ];
  
  private urlAPI: string = environment.endpoint + "Producto/";

  constructor(private http:HttpClient) { }

  // lista(): Observable<ResponseApi>{
  //   return this.http.get<ResponseApi>(`${this.urlAPI}lista`)
  // }

  lista(): Observable<ResponseApi> {
    const response: ResponseApi = {
      status: true,
      value: this.productos,
      msg: 'Lista de usuarios obtenida exitosamente' 
    };
    return of(response);
  }
  

  guardar(request: Producto): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlAPI}guardar`, request)
  }

  editar(request: Producto): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.urlAPI}Editar`, request)
  }

  eliminar(id: number): Observable<ResponseApi> {
    return this.http.delete<ResponseApi>(`${this.urlAPI}Eliminar/${id}`)
  }
}
