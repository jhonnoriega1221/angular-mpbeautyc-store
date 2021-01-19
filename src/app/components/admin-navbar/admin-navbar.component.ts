import { Component, OnInit } from '@angular/core';
import{ NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
  }

}
