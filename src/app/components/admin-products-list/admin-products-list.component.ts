import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent implements OnInit {

  constructor(
    private nav:NavbarService
  ) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
