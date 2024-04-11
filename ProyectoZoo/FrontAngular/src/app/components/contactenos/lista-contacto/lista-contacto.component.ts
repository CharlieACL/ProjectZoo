import { Component, inject, signal } from '@angular/core';
import { ContactoCollection } from '../../../interfaces/contacto.interface';
import { ContactenosService } from '../../../services/contactenos.service';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrl: './lista-contacto.component.css'
})
export class ListaContactoComponent {

  arrContactos = signal<ContactoCollection[]>([])

  contactosService = inject(ContactenosService);

  async ngOnInit(){
    const contactos = await this.contactosService.getAll();
    this.arrContactos.set(contactos);
  }
}
