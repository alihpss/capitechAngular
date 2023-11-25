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

  constructor(private conteudoService: ConteudosService) {}

  ngOnInit () {
    this.getAll();
  }

  getAll() {
    this.conteudoService.getAll().subscribe(resp=> {
      this.conteudos = resp;
    })
  }
}
