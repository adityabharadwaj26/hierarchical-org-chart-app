import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  loadEmployeesFailure,
  loadEmployeesSuccess,
} from './employee.actions';
import { Employee } from './../state/employee.model';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { EmployeeEffects } from './employee.effects';

export interface EmployeeState {
  employees: Employee[];
  error: string;
}
export const initialState: EmployeeState = {
  employees: [],
  error: '',
};
export const appEffects = [EmployeeEffects];

export const employeeReducer = createReducer(
  initialState,
  // on(EmployeeActions.loadEmployees, (state) => ({...state,}))
  on(loadEmployeesSuccess, (state, { employees }) => ({ ...state, employees })),
  on(loadEmployeesFailure, (state, { error }) => ({ ...state, error })),
  on(addEmployee, (state, { employees }) => {
    return {
      ...state,
      employees: employees,
    };
  }),
  on(deleteEmployee, (state, { employees }) => {
    return {
      ...state,
      employees: employees,
    };
  }),
  on(editEmployee, (state, { employees }) => {
    return {
      ...state,
      employees: employees,
    };
  })
);
