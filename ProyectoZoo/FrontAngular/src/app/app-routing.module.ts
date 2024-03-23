import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnimalesComponent } from './components/animales/lista-animales/lista-animales.component';
import { DetalleAnimalesComponent } from './components/animales/detalle-animales/detalle-animales.component';
import { NewAnimalComponent } from './components/animales/new-animal/new-animal.component';
import { HomeComponent } from './components/ui/home/home.component';
import { UpdateAnimalComponent } from './components/animales/update-animal/update-animal.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { adminGuard } from './guards/admin.guard';
import { ListEventosComponent } from './components/eventos/list-eventos/list-eventos.component';
import { NewContactoComponent } from './components/contactenos/new-contacto/new-contacto.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { NewUsuarioComponent } from './components/usuarios/new-usuario/new-usuario.component';
import { UpdateUsuarioComponent } from './components/usuarios/update-usuario/update-usuario.component';

const routes: Routes = [
  {path: '',component:HomeComponent},

  {path: 'animales',component:ListaAnimalesComponent,canActivate:[adminGuard]},
  {path: 'animales/new',component:NewAnimalComponent,canActivate:[adminGuard]},
  {path:'animales/update/:animalId',component:UpdateAnimalComponent,canActivate:[adminGuard]},
  {path: 'animales/:animalId',component:DetalleAnimalesComponent,canActivate:[adminGuard]},
  
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},

  {path: 'usuarios',component:ListaUsuariosComponent,canActivate:[adminGuard]},
  {path: 'usuarios/new',component:NewUsuarioComponent,canActivate:[adminGuard]},
  {path: 'usuarios/update/:usuarioId',component:UpdateUsuarioComponent,canActivate:[adminGuard]},

  {path:'eventos',component:ListEventosComponent},
  {path:'contacto',component:NewContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
