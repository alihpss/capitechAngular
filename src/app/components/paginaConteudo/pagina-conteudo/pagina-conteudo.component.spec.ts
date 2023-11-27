import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConteudoComponent } from './pagina-conteudo.component';

describe('PaginaConteudoComponent', () => {
  let component: PaginaConteudoComponent;
  let fixture: ComponentFixture<PaginaConteudoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaConteudoComponent]
    });
    fixture = TestBed.createComponent(PaginaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
