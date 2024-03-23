import { Component, inject, signal } from '@angular/core';
import { UsuariosCollection } from '../../../interfaces/usuarios.interface';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  arrUsuarios = signal<UsuariosCollection[]>([]);

  usuariosService = inject(UsuariosService);

  async ngOnInit(){
    const usuarios = await this.usuariosService.getAll();
    this.arrUsuarios.set(usuarios);
  }

  async onClickBorrar(usuarioId:string){
    const usuario = await this.usuariosService.deleteByID(usuarioId);

    if(usuario){
      const usuarios = await this.usuariosService.getAll();
      this.arrUsuarios.set(usuarios);
    }
    else{
      console.log("error");
    }
  }
}
