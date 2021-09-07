import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FetchEmployeesAction, SaveEmployeesAction } from "../actions/employee.actions";
import { exhaustMap, map, switchMap } from 'rxjs/operators'
import { of } from "rxjs";
@Injectable()
export class EmployeeEffects{
    constructor(private actions$:Actions){}
    fetchEmployee$ = createEffect(()=>this.actions$.pipe(
        ofType(FetchEmployeesAction.type),
        map(()=>{
            console.log("FetchEmployeesAction called");
            return new SaveEmployeesAction([])})
        // of(saveEmployees([]))
    ))
}