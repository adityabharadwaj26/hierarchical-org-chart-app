import { Component } from '@angular/core';
import { Employee } from 'src/app/state/employee.model';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent {
  users: Employee[] = [
    {
      id: '1',
      name: 'Aditya Bharadwaj',
      designation: 'Associate Specialist',
      email: 'adityabharadwaj26@gmail.com',
      phone: '8962819052',
      manager: '',
    },
    {
      id: '2',
      name: 'Amol Shinde',
      designation: 'Associate Specialist',
      email: 'adityabharadwaj26@gmail.com',
      phone: '8962819052',
      manager: 'Aditya Bharadwaj',
    },
    {
      id: '3',
      name: 'Aditya Kalge',
      designation: 'Associate Specialist',
      email: 'adityabharadwaj26@gmail.com',
      phone: '8962819052',
      manager: 'Aditya Bharadwaj',
    },
  ];

  employeeEvent(obj: { action: any; index: number }) {
    switch (obj.action) {
      case 'add':
        console.log(obj.action, obj.index);
        break;
      case 'edit':
        console.log(obj.action, obj.index);
        break;
      case 'delete':
        console.log(obj.action, obj.index);
        break;
      case 'change':
        console.log(obj.action, obj.index);
        break;
    }
  }
}
