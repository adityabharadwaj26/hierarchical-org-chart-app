import { Injectable } from '@angular/core';
import { Employee } from '../state/employee.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  users: Employee[] = [
    {
      id: 1,
      name: 'Aditya Bharadwaj',
      designation: 'Associate Specialist',
      email: 'adityabharadwaj26@gmail.com',
      phone: '8962819052',
      manager: '',
    },
    {
      id: 2,
      name: 'Amol Shinde',
      designation: 'Associate Specialist',
      email: 'adityabharadwaj26@gmail.com',
      phone: '8962819052',
      manager: 'Aditya Bharadwaj',
    },
    {
      id: 3,
      name: 'Aditya Kalge',
      designation: 'Associate Specialist',
      email: 'adityabharadwaj26@gmail.com',
      phone: '8962819052',
      manager: 'Aditya Bharadwaj',
    },
  ];
  constructor() {}

  loadAllDatatoLocalStorage() {
    if (!localStorage.getItem('tableData')) {
      const serializedPayload = JSON.stringify(this.users);
      localStorage.setItem('tableData', serializedPayload);
    }
  }

  saveDataToLocalStorage(payload: any) {
    const serializedPayload = JSON.stringify(payload);
    localStorage.setItem('tableData', serializedPayload);
    return of('Success')
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem('tableData');
    return of(data ? JSON.parse(data) : null) ;
  }
}
