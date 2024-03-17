import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalesService } from '../../../services/animales.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrl: './update-animal.component.css'
})
export class UpdateAnimalComponent {

  formulario: FormGroup;

  animalId = signal('');
  
  activatedRoute = inject(ActivatedRoute);
  animalesServices = inject(AnimalesService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      _id: new FormControl(),
      especie: new FormControl(),
      nombre: new FormControl(),
      sexo: new FormControl(),
      peso: new FormControl(),
      altura: new FormControl(),
      idZona: new FormControl(),
      edad: new FormControl(),
      activo: new FormControl(),
      __v: new FormControl()
    });
  }

  /*Método al iniciar la carga de la pantalla*/
  ngOnInit(){
    //Me traigo la informacion del animal en base a su id mediante a los servicios
    this.activatedRoute.params.subscribe( async params => {
      const animalId = params['animalId'];
      this.animalId.set(animalId);
      const animal = await this.animalesServices.getById(animalId);
      console.log(animal);

      //Relleno el formulario
      this.formulario.setValue(animal);
    });
  }

  async onSubmit(){
    const respuesta = await this.animalesServices.update(this.animalId(),this.formulario.value);
    this.router.navigate(['/animales']);
  }
}
