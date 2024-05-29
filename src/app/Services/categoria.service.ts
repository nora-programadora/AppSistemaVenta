import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlAPI: string = environment.endpoint + "Categoria/";

  constructor(private http:HttpClient) { }

  lista(): Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlAPI}lista`)
  }
}
