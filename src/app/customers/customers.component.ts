import { Component, OnInit } from '@angular/core';
import { CusotmerserviceService } from '../services/cusotmerservice.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./customers.component.css']  // Correction ici : c'est styleUrls (au pluriel)
})
export class CustomersComponent implements OnInit {

  customers: any;  // renommé customer → customers, car on récupère une liste

  constructor(private customerservice: CusotmerserviceService) { }

  ngOnInit() {
    this.getAllCustomers();  // pour appeler au chargement
  }

  getAllCustomers() {
    this.customerservice.getAllCustomers().subscribe({
      next: (resp) => {
        this.customers = resp;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des clients', err);
      }
    });
  }

  protected readonly NgForOf = NgForOf;
}
