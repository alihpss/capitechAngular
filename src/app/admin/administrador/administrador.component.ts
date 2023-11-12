import { Component } from '@angular/core';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  items: {title: string, course: string, content: string}[] = [];

  constructor(){
  }

  ngOnInit () {
    this.items = [
      {title: "teste", course: "js", content: "conteudo"},
      {title: "teste", course: "js", content: "conteudo"},
      {title: "teste", course: "js", content: "conteudo"},
      {title: "teste", course: "js", content: "conteudo"},
      {title: "teste", course: "js", content: "conteudo"},
    ]
  }
}
