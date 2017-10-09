import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locutores-form',
  templateUrl: './locutores-form.component.html',
  styleUrls: ['./locutores-form.component.css']
})
export class LocutoresFormComponent implements OnInit 
{

  private title = 'Novo locutor'
  
  constructor() { }

  ngOnInit() { }

}
