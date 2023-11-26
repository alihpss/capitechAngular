import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  'usuario': Usuario;
  'codAdmin': string;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuario = new Usuario();
    console.log("Init: ", this.usuario)
  }

  OnSubmit() {

    let observable: Observable<Usuario>;
    
    if (!this.codAdmin || this.codAdmin !== "admin") {
      this.usuario.eAdmin = false;

      observable = this.usuarioService.insert(this.usuario);

      observable.subscribe(() => {
        this.router.navigate(['/main']);
      })

      return;
    }

    this.usuario.eAdmin = true;
    observable = this.usuarioService.insert(this.usuario);

    this.setSessionStorageValue();

    observable.subscribe(() => {
      this.router.navigate(['/admin']);
    })

  }

  setSessionStorageValue(): void {
    return sessionStorage.setItem('admin', 'true');
  }
}
