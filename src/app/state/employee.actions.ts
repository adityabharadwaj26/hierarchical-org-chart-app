import { Employee } from './../state/employee.model';
import { createAction, createActionGroup, props } from '@ngrx/store';

export const deleteEmployee = createAction('[Employee] Delete Employee', props<{employees: Employee[]}>());
export const deleteEmployeeSuccess = createAction('[Employee] Delete Employee Success');
export const deleteEmployeeFailure = createAction('[Employee] Delete Employee Failure');

export const addEmployee = createAction('[Employee] Add Employee', props<{employees: Employee[]}>());
export const addEmployeeSuccess = createAction('[Employee] Add Employee Success');
export const addEmployeeFailure = createAction('[Employee] Add Employee Failure');

export const editEmployee = createAction('[Employee] Edit Employee', props<{employees: Employee[]}>());
export const editEmployeeSuccess = createAction('[Employee] Edit Employee Success');
export const editEmployeeFailure = createAction('[Employee] Edit Employee Failure');

export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ employees: any }>()
);
export const loadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure',
  props<{ error: string }>()
);
