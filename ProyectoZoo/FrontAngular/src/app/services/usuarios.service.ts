import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsuariosCollection } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() { 
    this.baseUrl ="http://localhost:3000/api/usuarios";
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

  isLogged():boolean{
    if(localStorage.getItem('token_admin')){
      return localStorage.getItem('token_admin') ? true : false;
    }
    return localStorage.getItem('token_user') ? true : false;   
  }

  isAdmin():boolean{
    return localStorage.getItem('token_admin') ? true : false;   
  }

}
