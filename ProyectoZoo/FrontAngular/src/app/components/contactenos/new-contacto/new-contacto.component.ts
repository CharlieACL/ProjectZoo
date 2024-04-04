import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactenosService } from '../../../services/contactenos.service';

@Component({
  selector: 'app-new-contacto',
  templateUrl: './new-contacto.component.html',
  styleUrl: './new-contacto.component.css'
})
export class NewContactoComponent {

  formulario: FormGroup;
  contactoService = inject(ContactenosService);
  router = inject(Router);
  mensajeRespuesta: string = '';

  constructor(){
    this.formulario =  new FormGroup({
      correo: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      mensaje: new FormControl('',[Validators.required]),
    })
  }

  async onSubmit(){
    const respuesta = await this.contactoService.create(this.formulario.value);
    if(respuesta){
      this.mensajeRespuesta = 'Su mensaje ha sido enviado'
    }
    else{
      this.mensajeRespuesta = 'Ha ocurrido un error al enviar el mensaje'
    }
    console.log(respuesta);
    
  }
}
