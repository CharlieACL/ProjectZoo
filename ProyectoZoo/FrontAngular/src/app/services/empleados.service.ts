import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { EmpleadosCollection } from '../interfaces/empleados.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  httpClient = inject(HttpClient);
  baseURL = 'http://localhost:3000/api/empleados';

  getAll(){
    return firstValueFrom(
      this.httpClient.get<EmpleadosCollection[]>(this.baseURL,this.createHeader())
    );
  }

  getById(empleadoId:string){
    return firstValueFrom(
      this.httpClient.get<EmpleadosCollection[]>(`${this.baseURL}/${empleadoId}`, 
      this.createHeader())
    );
  }

  create(formValues: EmpleadosCollection){
    return firstValueFrom(
      this.httpClient.post<EmpleadosCollection>(this.baseURL, formValues, this.createHeader())
    );
  }

  update(empleadoId:string, formValues: EmpleadosCollection){
    return firstValueFrom(
      this.httpClient.put(`${this.baseURL}/${empleadoId}`,formValues, this.createHeader())
    );
  }

  deleteByID(empleadoId:string){
    return firstValueFrom(
      this.httpClient.delete<EmpleadosCollection>(`${this.baseURL}/${empleadoId}`, this.createHeader())
    );
  }

  createHeader(){
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_admin')!
      })     
    }
  }
}
