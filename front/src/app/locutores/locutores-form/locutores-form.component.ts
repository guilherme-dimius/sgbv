import { Component, OnInit } from '@angular/core';
import { LocutorService, Locutor } from '../../services/locutor/locutor.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-locutores-form',
  templateUrl: './locutores-form.component.html',
  styleUrls: ['./locutores-form.component.css'],
  providers: [LocutorService]
})

export class LocutoresFormComponent implements OnInit 
{
  private title = 'Novo locutor'
  private model : Locutor
  
  constructor(
    private ls : LocutorService,
    private router: Router,
    private aRoute: ActivatedRoute

  ) { }

  ngOnInit() 
  {
    this.model = new Locutor()
    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => 
      {
        if(params['id']) 
        {
          // Buscamos o objeto para edição
          this.ls.obterPorId(params['id']).subscribe(
            (existente: Locutor) => this.model = existente
          )
        }
      }
    )  
  }

  enviar() 
  {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.ls.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/locutores']),
      erro => console.error(erro)
    )
  }


}
