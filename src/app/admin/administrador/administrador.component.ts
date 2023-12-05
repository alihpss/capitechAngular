import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {

  items: {id: number, title: string, course: string, content: string}[] = [];

  constructor(private preventRouter: Router){
  }

  ngOnInit () {
    const adminLogado = this.readSessionStorageValue();

    if(!adminLogado) {
      this.preventRouter.navigate(["/main"]);
      window.alert("Você deve realizar login antes de entrar na área do admin.");
      return;
    }
  }

  readSessionStorageValue(): any {
    return sessionStorage.getItem("admin");
  }
}
