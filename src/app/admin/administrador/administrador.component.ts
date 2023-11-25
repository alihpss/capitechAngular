import { Component } from '@angular/core';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  items: {id: number, title: string, course: string, content: string}[] = [];

  constructor(){
  }

  ngOnInit () {
    this.items = [
      {id: 1, title: "teste", course: "js", content: "conteudo"},
      {id: 2, title: "teste 2 ", course: "php", content: "conteudo teste 2"},
      {id: 3, title: "teste 3", course: "java", content: "conteudo teste 3"},
      {id: 4, title: "teste 4", course: "css", content: "conteudo teste 4"},
      {id: 5, title: "teste 5", course: "c#", content: "conteudo teste 5"},
    ]
  }
}
