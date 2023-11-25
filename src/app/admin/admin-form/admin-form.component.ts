import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Conteudo } from 'src/app/materias/conteudo';
import { ConteudosService } from 'src/app/materias/conteudos.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  'conteudo': Conteudo;

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

  OnSubmit() {
    let observable: Observable<Conteudo>;

    if (this.conteudo.id) {
      observable = this.conteudoService.update(this.conteudo);
    }
    else {
      observable = this.conteudoService.update(this.conteudo);
    }

    observable.subscribe(() => {
      this.router.navigate(['/admin']);
    })
  }
}
