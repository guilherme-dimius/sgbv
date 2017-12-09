import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// Classe que representa o model no front-end
export class Codificacao 
{
  public _id: string;
  public tipoCodificacao: string;
  public taxa: string;
}

@Injectable()
export class CodificacaoService 
{
	constructor(private http: HttpClient) { }

	public listarTodos() 
	{
  	return this.http.get('http://localhost:3000/codificacoes');
	}

	public obterPorId(id: string) 
  {
    return this.http.get('http://localhost:3000/codificacoes/' + id)
  }

  public salvar(c: Codificacao) 
  {
    // Atualiza objeto já existente
    if(c._id) 
    {
      return this.http.post('http://localhost:3000/codificacoes', c)
    }
    // Inserção de novo objeto
    else 
    {
      return this.http.put('http://localhost:3000/codificacoes', c)
    }
  }

  public excluir(id: string) 
  {
    return this.http.delete('http://localhost:3000/codificacoes/' + id)
  }
}
