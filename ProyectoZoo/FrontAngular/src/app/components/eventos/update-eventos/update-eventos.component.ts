import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-update-eventos',
  templateUrl: './update-eventos.component.html',
  styleUrl: './update-eventos.component.css'
})
export class UpdateEventosComponent {

  formulario: FormGroup;
  eventoId = signal('');

  activatedRoute = inject(ActivatedRoute);
  eventosServices = inject(EventosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      _id:new FormControl(),
      descripcion: new FormControl(),
      dia: new FormControl(),
      hora: new FormControl(),
      duracion: new FormControl(),
      estado: new FormControl(),
      __v: new FormControl()
    });
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(async params => {
      const eventoId = params['eventoId'];
      this.eventoId.set(eventoId);
      const evento = await this.eventosServices.getById(eventoId)
      console.log(evento);
      
      this.formulario.setValue(evento);
    });
  }

  async onSubmit(){
    const respuesta = await this.eventosServices.update(this.eventoId(),this.formulario.value);
    this.router.navigate(['/eventos']);
  }
}
