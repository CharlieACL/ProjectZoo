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
  errorMessage: string = '';

  constructor(){
    this.formulario = new FormGroup({
      correo: new FormControl(),
      contrasenna: new FormControl()
    });
  }

  async onSubmit(){
    const respuesta = await this.usuariosService.login(this.formulario.value);    
    if(respuesta){
      console.log(respuesta);
      if(respuesta.idRol == '65f5cbfaf6eb3d011e1e2a4f'){
        localStorage.setItem('token_admin',respuesta.token);
        this.router.navigate(['']);
      }
      if(respuesta.idRol == '65f5cbfaf6eb3d011e1e2a50'){
        localStorage.setItem('token_user',respuesta.token);
        this.router.navigate(['']);
      }     
    }
    if(respuesta.error){
      this.errorMessage = 'Datos invalidos, intentelo nuevamente';
      console.error('Error: hay iniciar sesion.'); 
    }
  }
}
