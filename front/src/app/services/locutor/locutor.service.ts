import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LocutorService 
{

	constructor(private http: HttpClient) { }

  	public listarTodos() 
  	{
    	return this.http.get('http://localhost:3000/locutores');
  	}

}
