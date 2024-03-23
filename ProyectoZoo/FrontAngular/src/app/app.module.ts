import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAnimalesComponent } from './components/animales/lista-animales/lista-animales.component';
import { DetalleAnimalesComponent } from './components/animales/detalle-animales/detalle-animales.component';
import { NewAnimalComponent } from './components/animales/new-animal/new-animal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/ui/menu/menu.component';
import { HomeComponent } from './components/ui/home/home.component';
import { UpdateAnimalComponent } from './components/animales/update-animal/update-animal.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { ListEventosComponent } from './components/eventos/list-eventos/list-eventos.component';
import { NewContactoComponent } from './components/contactenos/new-contacto/new-contacto.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { NewUsuarioComponent } from './components/usuarios/new-usuario/new-usuario.component';
import { UpdateUsuarioComponent } from './components/usuarios/update-usuario/update-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAnimalesComponent,
    DetalleAnimalesComponent,
    NewAnimalComponent,
    MenuComponent,
    HomeComponent,
    UpdateAnimalComponent,
    RegisterComponent,
    LoginComponent,
    ListEventosComponent,
    NewContactoComponent,
    ListaUsuariosComponent,
    NewUsuarioComponent,
    UpdateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule //Me permite nombrar los datos en los formularios del CRUD
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
