import { IEmployee } from "./modals/IEmployee";

export interface AppState {
  readonly employeeData: IEmployee[];
}