import { Component, OnInit } from '@angular/core';
import { CusotmerserviceService } from '../services/cusotmerservice.service';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {catchError, Observable, of, throwError} from 'rxjs';
import {customer} from '../model/customer.model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    ReactiveFormsModule,
    JsonPipe
  ],
  styleUrls: ['./customers.component.css']  // Correction ici : c'est styleUrls (au pluriel)
})
export class CustomersComponent implements OnInit {

  customers$!: Observable<customer[] | null>;
  errormes! : string
  searchformGroup! : FormGroup

  constructor(private customerservice: CusotmerserviceService,private  fb : FormBuilder) { }

  ngOnInit() {
    this.searchformGroup = this.fb.group(
      {
        search:this.fb.control("")
      }
    )
    this.handelsearchcustomer();  // pour appeler au chargement
  }

 /* getAllCustomers() {
    this.customerservice.getAllCustomers().subscribe({
      next: (resp) => {
        this.customers = resp;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des clients', err);
      }
    });
  }*/

  handelsearchcustomer(){
    let keyword = this.searchformGroup?.value.search
    this.customers$=this.customerservice.getAllCustomersByName(keyword).pipe(
      catchError(err => {
        console.error('Erreur lors du chargement des clients :', err);
        this.errormes = err.message
        return of(null);
      })
    )

  }

  getAllCustomers() {

    this.customers$ = this.customerservice.getAllCustomers().pipe(
      catchError(err => {
        console.error('Erreur lors du chargement des clients :', err);
        this.errormes = err.message
        return of(null);
      })
    );
  }
  handleDeletCustomer(id:number){
    this.customerservice.deletecustomer(id).subscribe(
      {
        next : (resp) =>{this.handelsearchcustomer()},
        error : err => console.log(err)
      }
    )
  }

  protected readonly NgForOf = NgForOf;
}
