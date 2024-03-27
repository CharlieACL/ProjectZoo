import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsuariosCollection } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient);
  private baseUrl: string;
  private baseUrlA: string;

  constructor() { 
    this.baseUrl ="http://localhost:3000/api/usuarios";
    this.baseUrlA ="http://localhost:3000/api/users"
  }

  register(formValue:UsuariosCollection){
    return firstValueFrom(
      this.httpClient.post<UsuariosCollection>(`${this.baseUrl}/register`,formValue)
    )
  }

  login(formValue:UsuariosCollection){
    return firstValueFrom(
      this.httpClient.post<UsuariosCollection>(`${this.baseUrl}/login`,formValue)
    )
  }

  //VALIDACION DE SESSION
  
  isLogged():boolean{
    if(localStorage.getItem('token_admin')){
      return localStorage.getItem('token_admin') ? true : false;
    }
    return localStorage.getItem('token_user') ? true : false;   
  }

  isAdmin():boolean{
    return localStorage.getItem('token_admin') ? true : false;   
  }

  isUser():boolean{
    return localStorage.getItem('token_user') ? true : false;   
  }

  //CRUD USUARIOS

  getAll(){
    return firstValueFrom(
      this.httpClient.get<UsuariosCollection[]>(this.baseUrlA, this.createHeader())
    );  
  }

  getById(usuarioId:string){
    return firstValueFrom(
      this.httpClient.get<UsuariosCollection[]>(`${this.baseUrlA}/${usuarioId}`, this.createHeader())
    );
  }

  create(formVales:UsuariosCollection){
    return firstValueFrom(
      this.httpClient.post<UsuariosCollection>(this.baseUrlA,formVales, this.createHeader())
    );
  }

  update(usuarioId:string, formValues:UsuariosCollection){
    return firstValueFrom(
      this.httpClient.put(`${this.baseUrlA}/${usuarioId}`,formValues, this.createHeader())
    );
  }

  deleteByID(usuarioId:string){
    return firstValueFrom(
      this.httpClient.delete<UsuariosCollection>(`${this.baseUrlA}/${usuarioId}`, this.createHeader())
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
