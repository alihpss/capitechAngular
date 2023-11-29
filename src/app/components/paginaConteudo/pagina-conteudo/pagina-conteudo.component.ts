import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty } from 'rxjs';
import { Conteudo } from 'src/app/services/conteudos/conteudo';
import { ConteudosService } from 'src/app/services/conteudos/conteudos.service';

@Component({
  selector: 'app-pagina-conteudo',
  templateUrl: './pagina-conteudo.component.html',
  styleUrls: ['./pagina-conteudo.component.css']
})
export class PaginaConteudoComponent {

  'conteudo': Conteudo | null;
  
  constructor (private route: ActivatedRoute, private router: Router, private conteudoService: ConteudosService) {}

  ngOnInit() {
    this.conteudo = new Conteudo();
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.conteudoService.getById(parseInt(id)).subscribe(resp => {
        this.conteudo = resp;
      })
    }
  }

}
