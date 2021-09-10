import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/modals/IEmployee';
import { EmployeesFascadeService } from 'src/app/fascade/employees-fascade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentPage=1;
  employeeData: IEmployee[]=[];
  allEmployees$: Observable<ReadonlyArray<IEmployee>>


  constructor(private employeesFascadeService:EmployeesFascadeService) {
    this.allEmployees$ = this.employeesFascadeService.allEmployees$;
   }

  ngOnInit(): void {
    this.allEmployees$.subscribe(
      (employeeList: readonly IEmployee[])=>{
        let start = (6*(this.currentPage-1));
        let end = (6*(this.currentPage));
      let arr = employeeList.slice(start,end)
      this.employeeData=arr;
    })
    this.employeesFascadeService.fetchEmployees(this.currentPage);
  }

  pageChange(operator:string){

    if(operator=="+"){
    this.currentPage++;
    }
    else if(operator=="-"){
    this.currentPage--;
    }

    this.employeesFascadeService.fetchEmployees(this.currentPage);

  }

}
