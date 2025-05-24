import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {customer} from '../model/customer.model';
import {environment} from '../environements/environment';

@Injectable({
  providedIn: 'root'
})
export class CusotmerserviceService {

  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<Array<customer>>{
    return this.http.get<Array<customer>>(environment.apiUrl+"/customers")
  }

  getAllCustomersByName(keyword:string):Observable<Array<customer>>{
    return this.http.get<Array<customer>>(environment.apiUrl+"/customers/search?search="+keyword)
  }


  savecustomer(cs:customer):Observable<customer>{
    return this.http.post<customer>(environment.apiUrl+"/customers",cs)
  }

  deletecustomer(id:number){
    return this.http.delete(environment.apiUrl+"/customers/"+id)
  }

}

