import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/modals/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeData: IEmployee[]=[];

  constructor() { }

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
  }

}
