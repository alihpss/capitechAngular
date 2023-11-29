import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  
  'usuarios': Usuario[];

  constructor (private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    const adminLogado = this.readSessionStorageValue();

    if(!adminLogado) {
      this.router.navigate(["/main"]);
      return;
    }

    this.getAll();
  }

  getAll() {
    this.usuarioService.getAll().subscribe(resp=> {
      this.usuarios = resp;
    })
  }

  delete(usuario: Usuario) {
    if (window.confirm(`Realmente deseja excluir o usuário: ${usuario.nome}`)) {
      this.usuarioService.delete(usuario.id).subscribe(() => {
        this.usuarios = this.usuarios.filter(u => u !== usuario);
      })
    }
  }

  readSessionStorageValue(): any {
    return sessionStorage.getItem("admin");
  }
}
