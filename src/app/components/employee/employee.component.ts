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
  currentPage=1;

  employeeData: IEmployee[]=[];

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.select(selectEmployeeList).subscribe(
      (employeeList: readonly IEmployee[])=>{
        let start = (6*(this.currentPage-1));
        let end = (6*(this.currentPage));
      let arr = employeeList.slice(start,end)
      this.employeeData=arr;
    })
    this.fetchPage();
  }

  pageChange(operator:string){

    if(operator=="+"){
    this.currentPage++;
    }
    else if(operator=="-"){
    this.currentPage--;
    }

    this.fetchPage();

  }

  fetchPage(){
    this.store.dispatch(new FetchEmployeesAction(this.currentPage))
  }

}
