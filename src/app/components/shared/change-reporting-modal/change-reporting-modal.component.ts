import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrModal } from '@clr/angular';
import { Employee } from 'src/app/state/employee.model';

@Component({
  selector: 'app-change-reporting-modal',
  templateUrl: './change-reporting-modal.component.html',
  styleUrls: ['./change-reporting-modal.component.scss'],
})
export class ChangeReportingModalComponent implements OnInit{
  @Input() opened: boolean = false;
  @Input() employeeData: Employee | undefined;
  @Input() managers: any[] = [];
  @Output() closedEvent = new EventEmitter<any>();
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;
  size: string = 'lg';
  changeEmployeeForm: FormGroup;

  constructor() {
    this.changeEmployeeForm = new FormGroup({
      name: new FormControl({value: this.employeeData?.name, disabled : true}, Validators.required),
      manager: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    console.log(this.employeeData);
    console.log(this.managers);
    this.changeEmployeeForm.patchValue({name: this.employeeData?.name});
  }

  ngAfterViewInit() {
    console.log(this.employeeData);
    console.log(this.managers);
    this.changeEmployeeForm.patchValue({name: this.employeeData?.name});
  }

  cancelModal() {
    console.log('Cancel Modal');
    this.opened = false;
    this.changeEmployeeForm.reset();
    this.closedEvent.emit('cancelModal');
  }
  saveModal(form: FormGroup) {
    console.log(form.value);
    console.log(this.employeeData);
    console.log(this.managers);
    let newEmployee = form.value;
    newEmployee.manager = this.employeeData?.name;
    this.closedEvent.emit(newEmployee);
    this.opened = false;
  }
}
