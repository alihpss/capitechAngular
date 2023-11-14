import { Component, OnInit } from '@angular/core';
import { Conteudo } from 'src/app/materias/conteudo';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  'conteudo': Conteudo;

  constructor () {}

  ngOnInit() {
    this.conteudo = new Conteudo();
  }

  OnSubmit() {
    console.log(this.conteudo);
  }
}
