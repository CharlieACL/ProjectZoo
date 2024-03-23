import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrl: './new-usuario.component.css'
})
export class NewUsuarioComponent {

  formulario: FormGroup;
  usuarioService = inject(UsuariosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      nombre: new FormControl,
      correo: new FormControl,
      contrasenna: new FormControl,
      idRol: new FormControl
    });
  }

  async onSubmit(){
    const respuesta = await this.usuarioService.create(this.formulario.value);
    this.router.navigate(['/usuarios']);
  }
}
