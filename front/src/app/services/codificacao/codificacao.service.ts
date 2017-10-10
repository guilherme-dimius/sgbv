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
}
