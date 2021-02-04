import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { PreguntaService } from '../../services/pregunta.service';
import { Pregunta } from '../../interfaces/Pregunta';

@Component({
  selector: 'app-admin-clients-questions',
  templateUrl: './admin-clients-questions.component.html',
  styleUrls: ['./admin-clients-questions.component.css']
})
export class AdminClientsQuestionsComponent implements OnInit {

  preguntas:Pregunta[];

  constructor(
    private nav:NavbarService,
    private preguntaService:PreguntaService
  ) { }

  ngOnInit(): void {
    
    this.preguntaService.getPreguntas().subscribe(
      res =>{
        this.preguntas = res;
      }, err =>{
        console.log(err);
      }
    )

    this.nav.show();
  }

}
