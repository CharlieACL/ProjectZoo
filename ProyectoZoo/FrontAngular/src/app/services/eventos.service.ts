import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EventosCollection } from '../interfaces/eventos.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  httpClient = inject(HttpClient);
  baseURL = 'http://localhost:3000/api/eventos';

  getAll(){
    return firstValueFrom(
      this.httpClient.get<EventosCollection[]>(this.baseURL, this.createHeader())
    );  
  }

  getAllForUser(){
    return firstValueFrom(
      this.httpClient.get<EventosCollection[]>(this.baseURL, this.createHeaderUser())
    );  
  }

  getById(eventoId:string){
    return firstValueFrom(
      this.httpClient.get<EventosCollection[]>(`${this.baseURL}/${eventoId}`, 
      this.createHeader())
    );
  }

  create(formValues: EventosCollection){
    return firstValueFrom(
      this.httpClient.post<EventosCollection>(this.baseURL, formValues, this.createHeader())
    );
  }

  update(eventoId:string, formValues: EventosCollection){
    return firstValueFrom(
      this.httpClient.put(`${this.baseURL}/${eventoId}`,formValues, this.createHeader())
    );
  }
  
  deleteByID(eventoId:string){
    return firstValueFrom(
      this.httpClient.delete<EventosCollection>(`${this.baseURL}/${eventoId}`, this.createHeader())
    );
  }

  createHeader(){
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_admin')!
      })     
    }
  }

  createHeaderUser(){
    return {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_user')!
      })     
    }
  }
}
