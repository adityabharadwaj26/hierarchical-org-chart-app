import { Employee } from './../state/employee.model';
import { createReducer, on } from '@ngrx/store';

import { EmployeeActions, EmployeeApiActions } from './employee.actions';

export const initialState: ReadonlyArray<Employee> = [];

export const booksReducer = createReducer(
  initialState,
  on(EmployeeApiActions.retrievedEmployeeList, (_state, { Employee }) => Employee)
);