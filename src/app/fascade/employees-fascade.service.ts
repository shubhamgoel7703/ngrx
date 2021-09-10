import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee } from "../modals/IEmployee";
import { selectEmployeeList } from '../../app/store/selectors/employee.selectors';
import { FetchEmployeesAction } from '../store/actions/employee.actions';

@Injectable({
  providedIn: 'root'
})
export class EmployeesFascadeService {

  allEmployees$: Observable<ReadonlyArray<IEmployee>>

  constructor(private store:Store) {
    this.allEmployees$ =  store.select(selectEmployeeList);
  }

  fetchEmployees(page:number){
    this.store.dispatch(new FetchEmployeesAction(page))
  }

}
