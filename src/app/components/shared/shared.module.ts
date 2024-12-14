import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ClarityModule } from '@clr/angular';
import { ChangeReportingModalComponent } from './change-reporting-modal/change-reporting-modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    ChangeReportingModalComponent,
    AddModalComponent,
    DeleteModalComponent,
    EditModalComponent,
  ],
  imports: [CommonModule, ClarityModule, FormsModule, ReactiveFormsModule],
  exports: [
    AddModalComponent,
    ChangeReportingModalComponent,
    DeleteModalComponent,
    EditModalComponent,
  ],
})
export class SharedModule {}
