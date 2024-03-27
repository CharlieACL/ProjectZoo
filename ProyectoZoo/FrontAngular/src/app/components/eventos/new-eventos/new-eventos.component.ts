import { Component, inject } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-eventos',
  templateUrl: './new-eventos.component.html',
  styleUrl: './new-eventos.component.css'
})
export class NewEventosComponent {

  formulario: FormGroup;
  eventosSerivce = inject(EventosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      descripcion: new FormControl(),
      dia: new FormControl(),
      hora: new FormControl(),
      duracion: new FormControl(),
      estado: new FormControl(true)
    });
  }

  async onSubmit(){
    const respuesta = await this.eventosSerivce.create(this.formulario.value);
    this.router.navigate(['/eventos']);
  }
}
