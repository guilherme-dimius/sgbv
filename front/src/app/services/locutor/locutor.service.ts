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
  public genero: [string];
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

}
