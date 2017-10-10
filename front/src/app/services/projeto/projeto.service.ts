import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Classe que representa o model no front-end
export class Projeto 
{
  public _id: string;
  public nome: string;
  public data: Date;
  public bibliotecasVoz: [string];
}

@Injectable()
export class ProjetoService 
{
  constructor(private http: HttpClient) { }

  public listarTodos() 
  {
    return this.http.get('http://localhost:3000/projetos');
  } 
}
