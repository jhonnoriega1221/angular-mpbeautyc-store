import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/Admin';
import { AdminService } from '../../services/admin.service';
import { NavbarService } from '../../services/navbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  admins:Admin[];

  constructor(
    private adminService:AdminService,
    public nav:NavbarService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(
      res =>{
        this.admins = res;
      }, err =>{
        console.log(err);
      }
    )
    this.nav.show();
  }

  deleteAdmin(adminId:string){
    this.adminService.deleteAdmin(adminId).subscribe(
      res =>{
        this.snackbar.open('Admin eliminado',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
        this.ngOnInit();
      }
    )
  }

}
