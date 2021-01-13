import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

import { Usuario } from '../../interfaces/Usuario';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario:Usuario;

  constructor(private router:Router ,private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsuario().subscribe(
      res =>{
        this.usuario = res;
      },
      err =>{
        console.warn(err.message);
      }
    );

  }

}
