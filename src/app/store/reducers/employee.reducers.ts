import { state } from '@angular/animations';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { IEmployee } from 'src/app/modals/IEmployee';
import { environment } from '../../../environments/environment';
import { EmployeeAction, SaveEmployeesAction } from '../actions/employee.actions';

export interface EmployeeState {
  employeeList:ReadonlyArray<IEmployee>
}

const initState:EmployeeState={employeeList:[]};

// export const reducers: ActionReducerMap<EmployeeState,Action> = createReducer({employees:initState},
//   on(saveEmployees,(state,action)=>[...state]))

export function employeeReducer(
  state:EmployeeState = initState,
  action:EmployeeAction):EmployeeState{
    switch(action.type){
      case(SaveEmployeesAction.type):{
        console.log("SaveEmployeesAction called");
        let employeeList = [...state.employeeList,...action.employees]
        return {employeeList}
      }
    }
    return state;
  }

export const metaReducers: MetaReducer<EmployeeState>[] = !environment.production ? [] : [];
