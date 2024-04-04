import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ContactoCollection } from '../interfaces/contacto.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactenosService {

  httpClient = inject(HttpClient);
  baseURL = 'http://localhost:3000/api/contacto';

  getAll(){
    return firstValueFrom(
      this.httpClient.get<ContactoCollection[]>(this.baseURL)
    );  
  }

  create(formValues: ContactoCollection){
    return firstValueFrom(
      this.httpClient.post<ContactoCollection>(this.baseURL, formValues)
    );
  }

}
