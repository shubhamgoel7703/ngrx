import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FetchEmployeesAction, SaveEmployeesAction } from "../actions/employee.actions";
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators'
import { of } from "rxjs";
import { EmployeeService } from "src/app/services/employee.service";

@Injectable()
export class EmployeeEffects{
    constructor(private actions$:Actions,private employeeService:EmployeeService){}
    fetchEmployee$ = createEffect(()=>this.actions$.pipe(
        ofType(FetchEmployeesAction.type),
        mergeMap((action:FetchEmployeesAction)=>{
            return this.employeeService.getEmployeeList(action.pageNumber).
            pipe(map((response:any)=>{
                console.log("FetchEmployeesAction called",response);
                return new SaveEmployeesAction(response['data'])}))
        })
       
    ))
}