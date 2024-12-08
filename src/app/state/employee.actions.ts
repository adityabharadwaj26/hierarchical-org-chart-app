import { Employee } from './../state/employee.model';
import { createActionGroup, props } from '@ngrx/store';

export const EmployeeActions = createActionGroup({
  source: 'Employee',
  events: {
    'Add Employee': props<{ employeeId: string }>(),
    'Remove Employee': props<{ employeeId: string }>(),
  },
});

export const EmployeeApiActions = createActionGroup({
  source: 'Employee API',
  events: {
    'Retrieved Employee List': props<{ Employee: ReadonlyArray<Employee> }>(),
  },
});