import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEmployee } from 'src/app/modals/IEmployee';
import { FetchEmployeesAction } from 'src/app/store/actions/employee.actions';
import { selectEmployeeList } from 'src/app/store/selectors/employee.selectors';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeData: IEmployee[]=[];

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.select(selectEmployeeList).subscribe(employeeList=>this.employeeData=[...employeeList])
    this.store.dispatch(new FetchEmployeesAction(1))
  }

}
