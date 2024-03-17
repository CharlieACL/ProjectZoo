import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimalesService } from '../../../services/animales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrl: './new-animal.component.css'
})
export class NewAnimalComponent {

  formulario: FormGroup;
  animalesService = inject(AnimalesService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      especie: new FormControl(),
      nombre: new FormControl(),
      sexo: new FormControl(),
      peso: new FormControl(),
      altura: new FormControl(),
      idZona: new FormControl(),
      edad: new FormControl(),
      activo: new FormControl(true)
    });
  }

async onSubmit(){
    const respuesta = await this.animalesService.create(this.formulario.value);
    this.router.navigate(['/animales']);
  }
}
