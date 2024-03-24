import { Component, inject, signal } from '@angular/core';
import { EmpleadosCollection } from '../../../interfaces/empleados.interface';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css'
})
export class ListaEmpleadoComponent {

  arrEmpleados = signal<EmpleadosCollection[]>([]);

  empleadosService = inject(EmpleadosService);

  async ngOnInit(){
    const empleados = await this.empleadosService.getAll();
    this.arrEmpleados.set(empleados);
  }

  async onClickBorrar(empleadoId:string){
    const empleado = await this.empleadosService.deleteByID(empleadoId);

    if(empleado){
      const empleados = await this.empleadosService.getAll();
      this.arrEmpleados.set(empleados);
    }
    else{
      console.log("error");
    }
  }

  

}
