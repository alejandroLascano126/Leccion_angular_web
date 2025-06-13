import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postres } from '../interfaz/postres';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }


  obtenerDatos(): Observable<Postres[]> {
    return this.http.get<Postres[]>("https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/leccion-recetas.json"); // Asegúrate de que el archivo esté en assets/
  }
}
