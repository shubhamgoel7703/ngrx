// Section 1
import { Action, createAction, props } from '@ngrx/store'
import { IEmployee } from 'src/app/modals/IEmployee'


export class FetchEmployeesAction{
    static readonly type = '[Employee] fetch Employee';
    public readonly type = FetchEmployeesAction.type;
}

export class SaveEmployeesAction{
    static readonly type = '[Employee] save Employees';
    public readonly type = SaveEmployeesAction.type;
    constructor(public readonly employees:IEmployee[]){}
}

export class AddEmployeeAction{
    static readonly type = '[Employee] fetch Employee';
    public readonly type = AddEmployeeAction.type;
    constructor(public readonly employee:IEmployee){}
}

// export const SaveEmployeesAction= createAction('[Employee] save Employees',
// props<{employees:ReadonlyArray<IEmployee>}>());
// export const AddEmployeeAction= createAction('[Employee] add Employee',
// (employee:IEmployee)=>({employee}));

export type EmployeeAction = FetchEmployeesAction
|SaveEmployeesAction
|AddEmployeeAction;
