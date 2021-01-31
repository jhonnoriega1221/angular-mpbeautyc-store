import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm:FormGroup;


  constructor(
    public nav:NavbarService,
    private fb:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {

    this.adminLoginForm = this.fb.group({
      adminEmail:['', [Validators.required, Validators.email]],
      adminPassword:['', [Validators.required, Validators.minLength(6)]]
    });

    this.nav.show();
  }

  loginAdmin(){
    this.adminService.loginAdmin(this.adminLoginForm.value).subscribe(
      res => { 
        localStorage.setItem('TOKEN', res.token);
        window.location.reload();
      }, err => console.log(err)
    )
  }

}
