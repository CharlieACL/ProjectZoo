import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  formulario: FormGroup;
  usuariosService = inject(UsuariosService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      correo: new FormControl(),
      contrasenna: new FormControl()
    });
  }

  async onSubmit(){
    const respuesta = await this.usuariosService.login(this.formulario.value);    
    if(respuesta){
      if(respuesta.idRol == 1){
        localStorage.setItem('token_admin',respuesta.token);
        this.router.navigate(['']);
      }
      if(respuesta.idRol == 2){
        localStorage.setItem('token_user',respuesta.token);
        this.router.navigate(['']);
      }     
    }
    else{
      console.log('error');
    }
  }
}
