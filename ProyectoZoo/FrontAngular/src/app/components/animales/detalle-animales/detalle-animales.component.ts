import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../../services/animales.service';
import { AnimalesCollection } from '../../../interfaces/animales.interface';

@Component({
  selector: 'app-detalle-animales',
  templateUrl: './detalle-animales.component.html',
  styleUrl: './detalle-animales.component.css'
})
export class DetalleAnimalesComponent {

  activatedRoute = inject(ActivatedRoute);
  animalesService = inject(AnimalesService);

  animal = signal<any>({});

  ngOnInit(){
    this.activatedRoute.params.subscribe(async params =>{
    const animal = await this.animalesService.getById(params['animalId']);
    this.animal.set(animal);
    } )
  }
}
