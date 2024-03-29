import { Component, inject, signal } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { EventosCollection } from '../../../interfaces/eventos.interface';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrl: './list-eventos.component.css'
})
export class ListEventosComponent {

  arrEventos = signal<EventosCollection[]>([]);
  eventosService = inject(EventosService);

  async ngOnInit(){
    const eventos = await this.eventosService.getAllForUser();
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
