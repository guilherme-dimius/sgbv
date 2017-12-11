import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Classe que representa o model no front-end
export class Projeto 
{
  public _id: string;
  public nome: string;
  public data: Date;
  public biblioteca: string;
}

@Injectable()
export class ProjetoService 
{
  constructor(private http: HttpClient) { }

  public listarTodos() 
  {
    return this.http.get('http://localhost:3000/projetos');
  }

  public obterPorId(id: string) 
  {
    return this.http.get('http://localhost:3000/projetos/' + id)
  }

  public salvar(p: Projeto) 
  {
    // Atualiza objeto já existente
    if(p._id) 
    {
      return this.http.post('http://localhost:3000/projetos', p)
    }
    // Inserção de novo objeto
    else 
    {
      return this.http.put('http://localhost:3000/projetos', p)
    }
  }

  public excluir(id: string) 
  {
    return this.http.delete('http://localhost:3000/projetos/' + id)
  }
}
