import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Classe que representa o model no front-end
export class Gravacao 
{
  public _id: string;
  public locutores: [string];
  public bibliotecas: [string];
  public rotulo: [string];
  public codificacao: [string];
}

@Injectable()
export class GravacaoService 
{
  constructor(private http: HttpClient) { }

  public listarTodos() 
  {
    return this.http.get('http://localhost:3000/gravacoes');
  }

      public obterPorId(id: string) 
    {
      return this.http.get('http://localhost:3000/gravacoes/' + id)
    }

  public salvar(g: Gravacao) 
  {
    // Atualiza objeto já existente
    if(g._id) 
    {
      return this.http.post('http://localhost:3000/gravacoes', g)
    }
    // Inserção de novo objeto
    else 
    {
      return this.http.put('http://localhost:3000/gravacoes', g)
    }
  }

  public excluir(id: string) 
  {
    return this.http.delete('http://localhost:3000/gravacoes/' + id)
  }

}
