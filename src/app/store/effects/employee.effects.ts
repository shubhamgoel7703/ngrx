import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FetchEmployeesAction, SaveEmployeesAction } from "../actions/employee.actions";
import { exhaustMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators'
import { of } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";
import { Store } from "@ngrx/store";
import { selectEmployeeList } from "../selectors/employee.selectors";
import { IEmployee } from "src/app/modals/IEmployee";

@Injectable()
export class EmployeeEffects{
    constructor(private actions$:Actions,private employeeService:EmployeeService,
        private store:Store){}
    fetchEmployee$ = createEffect(()=>this.actions$.pipe(
        ofType(FetchEmployeesAction.type),
        withLatestFrom(this.store.select(selectEmployeeList)),
        mergeMap(([action,employeeList]:
            [FetchEmployeesAction,readonly IEmployee[]])=>{
            if(employeeList[6*(action.pageNumber-1)]==undefined) {
            return this.employeeService.getEmployeeList(action.pageNumber).
            pipe(map((response:any)=>{
                return new SaveEmployeesAction(response['data'])}))
            } else {
                // already data exisits
                return of(new SaveEmployeesAction([]))
            }
        })
       
    ))
}