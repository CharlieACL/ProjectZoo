import { Component, inject, signal } from '@angular/core';
import { AnimalesService } from '../../../services/animales.service';
import { AnimalesCollection } from '../../../interfaces/animales.interface';

@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrl: './lista-animales.component.css'
})
export class ListaAnimalesComponent {
  
  arrAnimales = signal<AnimalesCollection[]>([]);

  animalesService = inject(AnimalesService);

  async ngOnInit(){
    const animales = await this.animalesService.getAll();
    this.arrAnimales.set(animales);
  }
//Métodod para llamar al servicio de borrar
  async onClickBorrar(animalId:string){
    const animal = await this.animalesService.deleteByID(animalId);

    if(animal){
      const animales = await this.animalesService.getAll();
      this.arrAnimales.set(animales);
    }
    else{
      console.log("error");
    }
  }
}
