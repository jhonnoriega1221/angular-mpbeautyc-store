import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

import { Usuario } from '../../interfaces/Usuario';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario:Usuario;

  constructor(
    private router:Router,
    private usuarioService:UsuarioService
    ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      res =>{
        this.usuario = res;
      },
      err =>{
        console.warn(err.message);
      }
    );

  }

}
