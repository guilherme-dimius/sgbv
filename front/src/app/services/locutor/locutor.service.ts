import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// Classe que representa o model no front-end
export class Locutor 
{
  public _id: string;
  public email: string;
  public nome: string;
  public cidade: string;
  public estado: string;
  public sotaque: string;
  public genero: string;
  public problemaFala: string;
  public idade: Number;
}

@Injectable()
export class LocutorService 
{
	constructor(private http: HttpClient) { }

  public listarTodos() 
  {
    return this.http.get('http://localhost:3000/locutores');
  }

  public obterPorId(id: string) 
  {
    return this.http.get('http://localhost:3000/locutores/' + id)
  }

  public salvar(l: Locutor) 
  {
    // Atualiza objeto já existente
    if(l._id) 
    {
      return this.http.post('http://localhost:3000/locutores', l)
    }
    // Inserção de novo objeto
    else 
    {
      return this.http.put('http://localhost:3000/locutores', l)
    }
  }

  public excluir(id: string) 
  {
    return this.http.delete('http://localhost:3000/locutores/' + id)
  }

}
