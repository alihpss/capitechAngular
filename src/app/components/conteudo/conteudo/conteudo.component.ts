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
  role: string = '';

  constructor(private conteudoService: ConteudosService) {}


  ngOnInit () {
    this.getAll();
    this.role = this.readSessionStorageValue('admin');
  }

  getAll() {
    this.conteudoService.getAll().subscribe(resp=> {
      this.conteudos = resp;
    })
  }

  delete(conteudo: Conteudo) {
    if (window.confirm(`Realmente deseja excluir o curso: ${conteudo.nome}`)) {
      this.conteudoService.delete(conteudo.id).subscribe(() => {
        this.conteudos = this.conteudos.filter(c => c !== conteudo);
      })
    }
  }

  readSessionStorageValue(key: string): any {
    return sessionStorage.getItem(key);
  }

}
