import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ClrModal } from '@clr/angular';
import { Employee } from 'src/app/state/employee.model';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  @Input() opened: boolean = false;
  @Input() employeeData: Employee | undefined;
  @Output() closedEvent = new EventEmitter<any>();
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;
  size = 'lg';

  cancelModal() {
    this.opened = false;
    this.closedEvent.emit('cancelModal');
  }

  deleteUser() {
    this.closedEvent.emit(this.employeeData);
    this.opened = false;
  }
}
