import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data/table-data.component';
import { TableViewComponent } from './table-view/table-view.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TableViewComponent,
    TableDataComponent,
    ],
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule
  ]
})
export class GridModule { }
