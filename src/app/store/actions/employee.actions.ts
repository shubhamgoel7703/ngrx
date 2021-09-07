// Section 1
import { Action, createAction } from '@ngrx/store'
import { IEmployee } from 'src/app/modals/IEmployee'


export const fetchEmployees= createAction('[Employee] fetch Employee');
export const saveEmployees= createAction('[Employee] save Employee',
(employees:IEmployee[])=>({employeeList:employees}));
