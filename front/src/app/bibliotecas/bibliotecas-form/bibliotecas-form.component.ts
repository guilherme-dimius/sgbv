import { Component, OnInit } from '@angular/core';
import { BibliotecaService, Biblioteca } from '../../services/biblioteca/biblioteca.service'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-bibliotecas-form',
  templateUrl: './bibliotecas-form.component.html',
  styleUrls: ['./bibliotecas-form.component.css'],
  providers: [BibliotecaService]
})

export class BibliotecasFormComponent implements OnInit 
{
  private title = 'Nova biblioteca'
  private model : Biblioteca
  
  constructor(
    private bs : BibliotecaService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {  
    this.model = new Biblioteca()
    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => 
      {
        if(params['id']) 
        {
          // Buscamos o objeto para edição
          this.bs.obterPorId(params['id']).subscribe(
            (existente: Biblioteca) => this.model = existente
          )
        }
      }
    ) 
  }

  enviar() 
  {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.bs.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/bibliotecas']),
      erro => console.error(erro)
    )
  }


}