import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data/table-data.component';
import { TableViewComponent } from './table-view/table-view.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    TableViewComponent,
    TableDataComponent,
    ],
  imports: [
    CommonModule,
    ClarityModule
  ]
})
export class GridModule { }
