import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-admin-clients-questions',
  templateUrl: './admin-clients-questions.component.html',
  styleUrls: ['./admin-clients-questions.component.css']
})
export class AdminClientsQuestionsComponent implements OnInit {

  constructor(
    private nav:NavbarService
  ) { }

  ngOnInit(): void {

    this.nav.show();
  }

}
