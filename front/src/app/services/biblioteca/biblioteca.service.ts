import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// Classe que representa o model no front-end
export class Biblioteca 
{
  public _id: string;
  public nome: string;
  public rotulos: [string];
  public observacoes: string;
  public data: Date;
}

@Injectable()
export class BibliotecaService 
{
	constructor(private http: HttpClient) { }

  	public listarTodos() 
  	{
    	return this.http.get('http://localhost:3000/bibliotecas');
  	}

    public obterPorId(id: string) 
    {
      return this.http.get('http://localhost:3000/bibliotecas/' + id)
    }

  public salvar(b: Biblioteca) 
  {
    // Atualiza objeto já existente
    if(b._id) 
    {
      return this.http.post('http://localhost:3000/bibliotecas', b)
    }
    // Inserção de novo objeto
    else 
    {
      return this.http.put('http://localhost:3000/bibliotecas', b)
    }
  }

  public excluir(id: string) 
  {
    return this.http.delete('http://localhost:3000/bibliotecas/' + id)
  }

}
