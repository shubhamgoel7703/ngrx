import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEmployee } from 'src/app/modals/IEmployee';
import { FetchEmployeesAction } from 'src/app/store/actions/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeData: IEmployee[]=[];

  constructor(private store:Store) { }

  ngOnInit(): void {
    let obj:IEmployee={
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }

    this.employeeData.push(obj);
    this.employeeData.push(obj);

    this.store.dispatch(new FetchEmployeesAction())
  }

}
