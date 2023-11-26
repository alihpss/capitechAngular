import { Component } from '@angular/core';
import { Conteudo } from 'src/app/services/conteudos/conteudo';
import { ConteudosService } from 'src/app/services/conteudos/conteudos.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent {

  'conteudos': Conteudo[];
  items: {id: number, title: string, course: string, content: string}[] = [];

  // constructor(private conteudoService: ConteudosService) {}
  // constructor(private role: string) {}

  role: string = '';

  ngOnInit () {
    this.role = this.readSessionStorageValue('admin');
    this.items = [
      {id: 1, title: "teste", course: "js", content: "conteudo"},
      {id: 2, title: "teste 2 ", course: "php",content: "conteudo teste 2"},
      {id: 3, title: "teste 3", course: "java", content: "conteudo teste 3"},
      {id: 4, title: "teste 4", course: "css", content: "conteudo teste 4"},
      {id: 5, title: "teste 5", course: "c#", content: "conteudo teste 5"},
    ]
  }

  readSessionStorageValue(key: string): any {
    return sessionStorage.getItem(key);
  }

  // getAll() {
  //   this.conteudoService.getAll().subscribe(resp=> {
  //     this.conteudos = resp;
  //   })
  // }
}
