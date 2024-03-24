import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../../../services/empleados.service';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrl: './update-empleado.component.css'
})
export class UpdateEmpleadoComponent {

  formulario: FormGroup;

  empleadoId = signal('');

  activatedRoute = inject(ActivatedRoute);
  empleadosService = inject(EmpleadosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      _id:new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      identificacion: new FormControl(),
      telefono: new FormControl(),
      idServicio: new FormControl(),
      __v: new FormControl()
    });
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe( async params => {
      const empleadoId = params['empleadoId'];
      this.empleadoId.set(empleadoId);
      const empleado = await this.empleadosService.getById(empleadoId);
      console.log(empleado);

      this.formulario.setValue(empleado);
    });
  }

  async onSubmit(){
    const respuesta = await this.empleadosService.update(this.empleadoId(),this.formulario.value);
    this.router.navigate(['/empleados']);
  }
}
