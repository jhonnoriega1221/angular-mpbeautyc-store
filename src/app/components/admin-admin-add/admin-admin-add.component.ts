import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { confirmedValidator } from '../signup/confirmed.validator';


@Component({
  selector: 'app-admin-admin-add',
  templateUrl: './admin-admin-add.component.html',
  styleUrls: ['./admin-admin-add.component.css']
})
export class AdminAdminAddComponent implements OnInit {

  adminForm:FormGroup;


  constructor(
  	private nav:NavbarService,
  	private adminService:AdminService,
    private fb:FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router

  ) { }

  ngOnInit(): void {

    this.adminForm = this.fb.group({
      adminMail:['', [Validators.required, Validators.email]],
      adminPassword:['', [Validators.required, Validators.minLength(6)]],
      adminConfirmPassword:['',[Validators.required, Validators.minLength(6)]],
      adminName:['', [Validators.required]]
    },{ validators: confirmedValidator('adminPassword', 'adminConfirmPassword')
  });

  	this.nav.show();
  }

  registerAdmin(){
    this.adminService.addAdmin(this.adminForm.value).subscribe(
      res =>{
        this.snackbar.open('Admin registrado',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
        this.router.navigate(['/admin/settings/admin_manager']);
      }, err =>{
        console.log(err);
      }
    )
  }

}
