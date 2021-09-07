import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../modals/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl='https://reqres.in/api/users';

  constructor(private http:HttpClient) { }

  getEmployeeList(pageNumber:string):Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.baseurl+'?page='+pageNumber);
  }
  
}
