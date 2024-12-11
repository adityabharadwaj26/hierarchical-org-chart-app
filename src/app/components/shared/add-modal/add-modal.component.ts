import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ClrModal } from '@clr/angular';
import { Employee } from 'src/app/state/employee.model';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent {
  @Input() opened: boolean = false;
  @Input() employeeData: Employee | undefined;
  @Output() closedEvent = new EventEmitter<any>();
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;
  size: string = 'lg';
  addEmployeeForm: FormGroup;

  constructor() {
    this.addEmployeeForm = new FormGroup({
      manager: new FormControl({value: this.employeeData?.manager, disabled: true}, Validators.required),
      name: new FormControl('', Validators.required),
      designation: new FormControl(null, Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      phone: new FormControl('', Validators.required),
    });
  }

  designations = [
    'Associate Specialist',
    'Senior Specialist',
    'Associate Manager',
    'Manager',
  ];

  ngOnInit() {
   
  }

  cancelModal() {
    console.log('Cancel Modal');
    this.opened = false;
    this.addEmployeeForm.reset();
    this.closedEvent.emit('cancelModal');
  }
  saveModal(form: FormGroup) {
    console.log(form.value);
    let newEmployee = form.value;
    newEmployee.manager = this.employeeData?.name;
    this.closedEvent.emit(newEmployee);
    this.opened = false;
    // throw new Error('Method not implemented.');
  }
}
