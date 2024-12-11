import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
import {
  addEmployee,
  addEmployeeFailure,
  addEmployeeSuccess,
  deleteEmployee,
  editEmployee,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
} from './employee.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class EmployeeEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      mergeMap(() =>
        this.ApiService.getDataFromLocalStorage().pipe(
          map((employees) => {
            return loadEmployeesSuccess({ employees });
          }),
          catchError((error) =>
            of(loadEmployeesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  saveEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEmployee, deleteEmployee, editEmployee),
      mergeMap((payload) =>
        this.ApiService.saveDataToLocalStorage(payload.employees).pipe(
          map((response) => {
            return addEmployeeSuccess();
          }),
          catchError((error) => of(addEmployeeFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private ApiService: ApiService) {}
}
