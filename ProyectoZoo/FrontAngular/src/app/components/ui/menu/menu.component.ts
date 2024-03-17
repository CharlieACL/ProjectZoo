import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  router = inject(Router);
  usuariosService = inject(UsuariosService);

  onClickLogout(){
    localStorage.removeItem('token_admin');
    localStorage.removeItem('token_user');
    this.router.navigate(['/login']);
  }

}
