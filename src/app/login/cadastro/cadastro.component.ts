import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/services/usuarios/usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  'usuario': Usuario;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuario = new Usuario();
    console.log("Init: ", this.usuario)
  }

  OnSubmit() {
    // const eAdmin = document.getElementById('input-cod-admin').value;

    console.log("Submit: ", this.usuario)

  }
}
