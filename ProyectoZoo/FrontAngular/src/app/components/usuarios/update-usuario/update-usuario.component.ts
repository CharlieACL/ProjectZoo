import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrl: './update-usuario.component.css'
})
export class UpdateUsuarioComponent {

  formulario: FormGroup;
  
  usuarioId = signal('');

  activatedRoute = inject(ActivatedRoute);
  usuariosServices = inject(UsuariosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      _id:new FormControl(),
      nombre: new FormControl(),
      correo: new FormControl(),
      contrasenna: new FormControl(),
      idRol: new FormControl(),
      __v: new FormControl()
    });
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(async params => {
      const usuarioId = params['usuarioId'];
      this.usuarioId.set(usuarioId);
      const usuario = await this.usuariosServices.getById(usuarioId)
      console.log(usuario);
      
      this.formulario.setValue(usuario);
    });
  }

  async onSubmit(){
    const respuesta = await this.usuariosServices.update(this.usuarioId(),this.formulario.value);
    this.router.navigate(['/usuarios']);
  }
}
