import { Component, OnInit } from '@angular/core';
import { LocutorService, Locutor } from '../../services/locutor/locutor.service'

@Component({
  selector: 'app-locutores-form',
  templateUrl: './locutores-form.component.html',
  styleUrls: ['./locutores-form.component.css'],
  providers: [LocutorService]
})

export class LocutoresFormComponent implements OnInit 
{
  private title = 'Novo locutor'
  private model : Locutor
  
  constructor(
    private bs : LocutorService,
  ) { }

  ngOnInit() 
  {  
    this.model = new Locutor()
  }
}
