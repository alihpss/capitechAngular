import { Component } from '@angular/core';
import { Conteudo } from 'src/app/materias/conteudo';
import { ConteudosService } from 'src/app/materias/conteudos.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent {

  'conteudos': Conteudo[];
  items: {id: number, title: string, course: string, eAdmin: boolean, content: string}[] = [];

  // constructor(private conteudoService: ConteudosService) {}

  ngOnInit () {
    // this.getAll();
    this.items = [
      {id: 1, title: "teste", course: "js", eAdmin: true, content: "conteudo"},
      {id: 2, title: "teste 2 ", course: "php", eAdmin: true, content: "conteudo teste 2"},
      {id: 3, title: "teste 3", course: "java", eAdmin: false, content: "conteudo teste 3"},
      {id: 4, title: "teste 4", course: "css", eAdmin: false, content: "conteudo teste 4"},
      {id: 5, title: "teste 5", course: "c#", eAdmin: true, content: "conteudo teste 5"},
    ]
  }

  // getAll() {
  //   this.conteudoService.getAll().subscribe(resp=> {
  //     this.conteudos = resp;
  //   })
  // }
}
