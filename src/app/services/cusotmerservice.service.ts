import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CusotmerserviceService {

  constructor(private http:HttpClient) { }

  getAllCustomers(){
    return this.http.get("http://localhost:8085/customers")
  }
}
