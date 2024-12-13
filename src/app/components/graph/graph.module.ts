import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphDataComponent } from './graph-data/graph-data.component';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { ClrDropdownModule } from '@clr/angular';



@NgModule({
  declarations: [
    GraphDataComponent,
    GraphViewComponent
  ],
  imports: [
    CommonModule,
    ClrDropdownModule 
  ]
})
export class GraphModule { }
