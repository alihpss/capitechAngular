import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

const routes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'login/entrar', component: LoginComponent},
    {path: 'login/cadastro', component: CadastroComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
