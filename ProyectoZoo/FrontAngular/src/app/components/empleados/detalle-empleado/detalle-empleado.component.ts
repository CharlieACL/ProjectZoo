import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrl: './detalle-empleado.component.css'
})
export class DetalleEmpleadoComponent {

  activatedRoute = inject(ActivatedRoute);
  empleadosService = inject(EmpleadosService);

  empleado = signal<any>({});

  ngOnInit(){
    this.activatedRoute.params.subscribe(async params =>{
      const empleado = await this.empleadosService.getById(params['empleadoId']);
      this.empleado.set(empleado);
      } )
    }

}
