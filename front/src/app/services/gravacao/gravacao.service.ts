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
    return this.http.get('http://localhost:3000/gravaoes');
  } 
}
