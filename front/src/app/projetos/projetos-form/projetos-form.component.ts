import { Component, OnInit } from '@angular/core';
import { ProjetoService, Projeto } from '../../services/projeto/projeto.service'
import { BibliotecaService, Biblioteca } from '../../services/biblioteca/biblioteca.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-projetos-form',
  templateUrl: './projetos-form.component.html',
  styleUrls: ['./projetos-form.component.css'],
  providers: [ProjetoService, BibliotecaService]
})

export class ProjetosFormComponent implements OnInit 
{
  private title = 'Novo projeto'
  private model : Projeto
  private bibliotecas : any
  
  constructor(
    private ps : ProjetoService,
    private bs : BibliotecaService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() 
  {  
    this.model = new Projeto()
    this.model.biblioteca = ''
    
    this.bibliotecas = this.bs.listarTodos()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => {
        if(params['id']) 
        {
          // Buscamos o objeto para edição
          this.ps.obterPorId(params['id']).subscribe(
            (existente: Projeto) => this.model = existente
          )
        }
      }
    )     
  }

  enviar()
  {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.ps.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/projetos']),
      erro => console.error(erro)
    )
  }


}
