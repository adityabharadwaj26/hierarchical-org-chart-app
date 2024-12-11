import { EmployeeState } from './employee.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee } from './employee.model';

const feature = (state: EmployeeState): any => state.employees;

export const selectAllEmployees = createSelector(
  (state: any) => state.employeeState,
  feature
);
