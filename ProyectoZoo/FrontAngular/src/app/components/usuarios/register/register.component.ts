import { Component, Injector, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    formulario: FormGroup;
    usuariosService = inject(UsuariosService);
    router = inject(Router);

    constructor(){
      this.formulario = new FormGroup({
        nombre: new FormControl(),
        correo: new FormControl(),
        contrasenna: new FormControl(),
        idRol: new FormControl('65f5cbfaf6eb3d011e1e2a50')
      })
    }

    async onSubmit(){
      const respuesta = await this.usuariosService.register(this.formulario.value);
      this.router.navigate(['/login']);
    }
}
