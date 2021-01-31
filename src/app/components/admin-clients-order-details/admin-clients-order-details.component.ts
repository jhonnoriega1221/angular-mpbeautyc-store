import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-admin-clients-order-details',
  templateUrl: './admin-clients-order-details.component.html',
  styleUrls: ['./admin-clients-order-details.component.css']
})
export class AdminClientsOrderDetailsComponent implements OnInit {

  constructor(
    private nav:NavbarService
  ) { }

  ngOnInit(): void {
    this.nav.show();
  }




}
