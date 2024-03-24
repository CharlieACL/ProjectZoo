import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpleadosService } from '../../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrl: './new-empleado.component.css'
})
export class NewEmpleadoComponent {

  formulario: FormGroup;
  empleadosService = inject(EmpleadosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      identificacion: new FormControl(),
      telefono: new FormControl(),
      idServicio: new FormControl()
    });
  }

  async onSubmit(){
    const respuesta = await this.empleadosService.create(this.formulario.value);
    this.router.navigate(['/empleados']);
  }

}
