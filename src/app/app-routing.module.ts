import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { AdministradorComponent } from './admin/administrador/administrador.component';
import {AdminFormComponent} from './admin/admin-form/admin-form.component';


const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'login/entrar', component: LoginComponent},
    {path: 'login/cadastro', component: CadastroComponent},
    {path: 'admin', component: AdministradorComponent},
    {path: 'admin/form', component: AdminFormComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
