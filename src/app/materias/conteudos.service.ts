import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conteudo } from './conteudo';

@Injectable({
  providedIn: 'root'
})

export class ConteudosService {

  private URL = 'http://localhost:9090/conteudo';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Conteudo[]>(this.URL);
  }

  public insert(conteudo: Conteudo) {
    return this.http.post<Conteudo>(this.URL, conteudo);
  }

  public getById(id: number) {
    const newUrl = `${this.URL}/${id}`;
    return this.http.get<Conteudo>(newUrl);
  }

  public update(conteudo: Conteudo) {
    const newUrl = `${this.URL}/${conteudo.id}`;
    return this.http.put<Conteudo>(newUrl, conteudo);
  }

  public delete(id: number) {
    const newUrl = `${this.URL}/${id}`;
    return this.http.delete<Conteudo>(newUrl);
  }
}
