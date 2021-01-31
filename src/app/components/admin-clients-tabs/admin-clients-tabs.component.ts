import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-admin-clients-tabs',
  templateUrl: './admin-clients-tabs.component.html',
  styleUrls: ['./admin-clients-tabs.component.css']
})
export class AdminClientsTabsComponent implements OnInit {

  constructor(
    private nav:NavbarService
  ) { }

  ngOnInit(): void {

    this.nav.show();
  }

}
