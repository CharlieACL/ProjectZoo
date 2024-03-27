import { Component, inject, signal } from '@angular/core';
import { EventosCollection } from '../../../interfaces/eventos.interface';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrl: './lista-eventos.component.css'
})
export class ListaEventosComponent {

  arrEventos = signal<EventosCollection[]>([]);
  eventosService = inject(EventosService);

  async ngOnInit(){
    const eventos = await this.eventosService.getAll();
    this.arrEventos.set(eventos);
  }

  async onClickBorrar(eventoId:string){
    const evento = await this.eventosService.deleteByID(eventoId);

    if(evento){
      const eventos = await this.eventosService.getAll();
      this.arrEventos.set(eventos);
    }
    else{
      console.log("error");
    }
  }

}
