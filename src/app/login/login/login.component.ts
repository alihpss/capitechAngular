import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  'email': string;
  'senha': string;
  'usuarios': Usuario[];

  constructor (private route: ActivatedRoute, private router: Router , private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getAll();
  }

  OnSubmit() {
    const usuarioExiste = this.usuarios.find(user => user.email === this.email && user.senha === this.senha);

    if (!usuarioExiste) {
      alert("Admin não encontrado na base de dados! Retornando para a home...");
      this.router.navigate(['/main']);
      return;
    }

    this.setSessionStorageValue();
    this.router.navigate(['/admin']);
  }

  getAll() {
    this.usuarioService.getAll().subscribe(resp => {
      this.usuarios = resp;
    })
  }

  setSessionStorageValue(): void {
    return sessionStorage.setItem('admin', 'true');
  }
}
