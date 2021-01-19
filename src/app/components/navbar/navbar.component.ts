import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../services/api.service';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  query:string;

  constructor(
    private apiService:ApiService,
    private authService:AuthService,
    private router:Router, 
    public nav:NavbarService
    ) { }

  userName:string;
  auth:boolean;

  ngOnInit(): void {

     

    this.auth = this.authService.isAuthenticated();
    if(this.auth)
      this.apiService.getUsuario().subscribe(
        res =>{
          this.userName = res.name;
        },
        err =>{
          console.log(err);
        }
      )

  }

  //Buscar producto
  buscarProductos(query:string){
    if(query != "")
      this.router.navigate(['/search/',query]);
  }

  logOut(){
    localStorage.removeItem('TOKEN');
    window.location.reload();
  }

}
