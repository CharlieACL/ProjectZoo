import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AnimalesCollection } from '../interfaces/animales.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  httpClient = inject(HttpClient);
  baseURL = 'http://localhost:3000/api/animales';
  
  getAll(){
    return firstValueFrom(
      this.httpClient.get<AnimalesCollection[]>(this.baseURL, this.createHeader())
    );  
  }

  getById(animalId:string){
    return firstValueFrom(
      this.httpClient.get<AnimalesCollection[]>(`${this.baseURL}/${animalId}`, 
      this.createHeader())
    );
  }

  create(formValues: AnimalesCollection){
    return firstValueFrom(
      this.httpClient.post<AnimalesCollection>(this.baseURL, formValues, this.createHeader())
    );
  }

  update(animalId:string, formValues: AnimalesCollection){
    return firstValueFrom(
      this.httpClient.put(`${this.baseURL}/${animalId}`,formValues, this.createHeader())
    );
  }
  
  deleteByID(animalId:string){
    return firstValueFrom(
      this.httpClient.delete<AnimalesCollection>(`${this.baseURL}/${animalId}`, this.createHeader())
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
