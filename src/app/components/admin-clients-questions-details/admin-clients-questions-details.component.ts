import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { Pregunta } from '../../interfaces/Pregunta';
import { PreguntaService } from '../../services/pregunta.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-clients-questions-details',
  templateUrl: './admin-clients-questions-details.component.html',
  styleUrls: ['./admin-clients-questions-details.component.css']
})
export class AdminClientsQuestionsDetailsComponent implements OnInit {

  pregunta:Pregunta;
  id:string;
  answerForm:FormGroup;

  constructor(
    public nav:NavbarService,
    private preguntaService:PreguntaService,
    private snackbar:MatSnackBar,
    private activeRoute:ActivatedRoute,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      res =>{
        this.id = res ['id'];
        this.preguntaService.getPregunta(this.id).subscribe(
          res =>{
            this.pregunta = res[0];
            console.log(this.pregunta);
          }, err =>{
            console.log(err);
          }
        )
      }, err =>{
        console.log(err);
      }
    );
    this.answerForm = this.fb.group({
      questionAnswer:['']
    });
    this.nav.show();
  }

  responderPregunta(){
    this.preguntaService.responderPregunta(this.answerForm.value.questionAnswer, this.id).subscribe(
      res =>{

        this.snackbar.open('Respuesta enviada',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        })

        this.preguntaService.getPregunta(this.id).subscribe(
          res =>{
            this.pregunta = res[0];
          }, err =>{
            console.log(err);
          }
        ) 

      }, err =>{
        console.log(err);
      }
    )
  }

}
