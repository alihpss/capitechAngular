import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { AdministradorComponent } from './admin/administrador/administrador.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { ConteudoComponent } from './components/conteudo/conteudo/conteudo.component';
import { PaginaConteudoComponent } from './components/paginaConteudo/pagina-conteudo/pagina-conteudo.component';
import { ListaUsuariosComponent } from './admin/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    CadastroComponent,
    AdministradorComponent,
    AdminFormComponent,
    ConteudoComponent,
    PaginaConteudoComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
