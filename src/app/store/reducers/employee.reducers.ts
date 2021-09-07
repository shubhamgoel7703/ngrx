import { Action } from '@ngrx/store'
import { IEmployee } from 'src/app/modals/IEmployee';
import { SaveEmployee } from '../actions/employee.actions';
import * as EmployeeActions from './../actions/employee.actions'

// Section 1
const initialState= {
    employeeData:[
    {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
}
]};
``
// Section 2
export function reducer(state = initialState, action: EmployeeActions.Actions) {

    // Section 3
    switch(action.type) {
        case EmployeeActions.SAVE_EMPLOYEE:
            return {...state, employeeData:action.employeeData};
        default:
            return state;
    }
}