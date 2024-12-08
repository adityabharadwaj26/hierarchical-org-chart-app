import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  saveDataToLocalStorage(payload: any): void {
    const serializedPayload = JSON.stringify(payload);
    localStorage.setItem('tableData', serializedPayload);
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem('tableData');
    return data ? JSON.parse(data) : null
  }
}
