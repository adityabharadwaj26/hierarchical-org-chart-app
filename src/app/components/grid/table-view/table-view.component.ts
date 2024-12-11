import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClrDatagridItemsTrackByFunction } from '@clr/angular';
import { Employee } from 'src/app/state/employee.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() users: Employee[] = [];
  @Output() employeeEvent = new EventEmitter<any>();
 
  employeeAction(action: any, user:Employee, index: any) {
    this.employeeEvent.emit({action,  user, index});
  }
}
