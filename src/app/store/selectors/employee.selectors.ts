import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "../reducers/employee.reducers";

export const selectEmployee = createFeatureSelector<EmployeeState>('employee');

export const selectEmployeeList = createSelector(selectEmployee,state=>state.employeeList);