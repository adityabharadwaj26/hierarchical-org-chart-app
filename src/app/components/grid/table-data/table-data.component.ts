import { Component, ViewChild } from '@angular/core';
import { ClrModal } from '@clr/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
} from 'src/app/state/employee.actions';
import { Employee } from 'src/app/state/employee.model';
import { EmployeeState } from 'src/app/state/employee.reducer';
import { selectAllEmployees } from 'src/app/state/employee.selectors';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent {
  employees: Employee[] = [];
  modalOpened: boolean = false;
  employeeData: Employee | undefined;
  addModalOpened: boolean = false;
  deleteModalOpened: boolean = false;
  changeModalOpened: boolean = false;
  editModalOpened: boolean = false;
  managersList: string[] = [];

  constructor(private store: Store<EmployeeState>) {
    this.store.select(selectAllEmployees).subscribe((employees) => {
      console.log(employees);
      this.employees = employees;
    });
  }

  ngOnInit() {}

  employeeEvent(obj: { action: any; user: Employee; index: number }) {
    switch (obj.action) {
      case 'add':
        this.addModalOpened = true;
        this.employeeData = obj.user;
        break;
      case 'edit':
        this.editModalOpened = true;
        this.employeeData = obj.user;
        break;
      case 'delete':
        this.deleteModalOpened = true;
        this.employeeData = obj.user;
        break;
      case 'change':
        this.changeModalOpened = true;
        this.employeeData = obj.user;
        let set = new Set(this.employees.map((e) => e.name));
        this.managersList = Array.from(set).filter(
          (n) => n && n !== obj.user.name
        );
        break;
    }
  }

  closedAddModalEvent(event: any) {
    if (event === 'cancelModal') {
      this.addModalOpened = false;
    } else {
      this.addModalOpened = false;
      let newEmployee = event;
      event.id = this.employees.length + 1;
      let arr = [...this.employees, newEmployee];
      // this.employees.push(event);
      this.store.dispatch(addEmployee({ employees: arr }));
    }
  }

  closedDeleteModalEvent(event: any) {
    if (event === 'cancelModal') {
      this.deleteModalOpened = false;
    } else {
      this.deleteModalOpened = false;
      let arr = [...this.employees];
      const newArr: Employee[] = arr.map((e) => {
        let newObject = e;
        if (e.manager === event.name) {
          newObject = { ...e, manager: event.manager };
        }
        return newObject;
      });
      let index = newArr.findIndex((employee) => employee.id == event.id);
      if (index !== -1) {
        newArr.splice(index, 1);
      }
      this.store.dispatch(deleteEmployee({ employees: newArr }));
    }
  }

  closedChangeModalEvent(event: any) {
    if (event === 'cancelModal') {
      this.changeModalOpened = false;
    } else {
      this.changeModalOpened = false;
      let arr = [...this.employees];
      let index = arr.findIndex((employee) => employee.name == event.name);
      if (index !== -1) {
        arr[index] = { ...arr[index], ...event };
      }
      this.store.dispatch(editEmployee({ employees: arr }));
    }
  }
  closedEditModalEvent(event: any) {
    if (event === 'cancelModal') {
      this.editModalOpened = false;
    } else {
      this.editModalOpened = false;
      let arr = [...this.employees];
      let index = arr.findIndex((employee) => employee.name == event.name);
      if (index !== -1) {
        arr[index] = { ...arr[index], ...event };
      }
      this.store.dispatch(editEmployee({ employees: arr }));
    }
  }
}
