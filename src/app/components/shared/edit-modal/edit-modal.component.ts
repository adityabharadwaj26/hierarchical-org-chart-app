import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  @Input() opened: boolean = false;
  @Input() employeeData: Employee | undefined;
  @Output() closedEvent = new EventEmitter<any>();
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;
  size: string = 'lg';
  addEmployeeForm: FormGroup;

  constructor() {
    this.addEmployeeForm = new FormGroup({
      manager: new FormControl(
        { value: this.employeeData?.manager, disabled: true },
        Validators.required
      ),
      name: new FormControl(this.employeeData?.name, Validators.required),
      designation: new FormControl(
        this.employeeData?.designation,
        Validators.required
      ),
      email: new FormControl(
        this.employeeData?.email,
        Validators.compose([Validators.required, Validators.email])
      ),
      phone: new FormControl(
        this.employeeData?.phone,
        Validators.compose([Validators.required, Validators.maxLength(10)])
      ),
    });
  }

  designations = [
    'Associate Specialist',
    'Senior Specialist',
    'Associate Manager',
    'Manager',
  ];

  ngOnInit() {
    this.addEmployeeForm.patchValue({ ...this.employeeData });
  }

  cancelModal() {
    this.opened = false;
    this.addEmployeeForm.reset();
    this.closedEvent.emit('cancelModal');
  }

  saveModal(form: FormGroup) {
    let newEmployee = form.value;
    newEmployee.manager = this.employeeData?.name;
    this.closedEvent.emit(newEmployee);
    this.opened = false;
    // throw new Error('Method not implemented.');
  }
}
