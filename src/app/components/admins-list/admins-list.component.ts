import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/interfaces/Admin';
import { AdminService } from '../../services/admin.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  admins:Admin[];

  constructor(
    private adminService:AdminService,
    public nav:NavbarService
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

}
