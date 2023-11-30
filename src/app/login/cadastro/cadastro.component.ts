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
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.getById(parseInt(id)).subscribe(resp => {
        this.usuario = resp;
        this.codAdmin = "admin";
      })
    }
  }

  OnSubmit() {

    let observable: Observable<Usuario>;
    
    if (!this.codAdmin || this.codAdmin !== "admin") {
      // this.usuario.eAdmin = false;

      // observable = this.usuarioService.insert(this.usuario);
      alert("Código de Admin inválido! Retornando para a home.")
      // observable.subscribe(() => {
        this.router.navigate(['/main']);
      // })

      return;
    }

    this.usuario.eAdmin = true;

    if (this.usuario.id) {
      observable = this.usuarioService.update(this.usuario);
    }
    else {
      observable = this.usuarioService.insert(this.usuario);
    }

    window.sessionStorage.clear(); //limpa o session storage 
    this.setSessionStorageValue(); //adiciona novamente;

    observable.subscribe(() => {
      this.router.navigate(['/admin']);
    })

  }

  setSessionStorageValue(): void {
    return sessionStorage.setItem('admin', 'true');
  }

}
