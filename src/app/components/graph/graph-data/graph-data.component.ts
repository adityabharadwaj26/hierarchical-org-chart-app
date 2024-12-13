import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from 'src/app/state/employee.model';
import { EmployeeState } from 'src/app/state/employee.reducer';
import { selectAllEmployees } from 'src/app/state/employee.selectors';
import * as d3 from 'd3-hierarchy';
@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.scss'],
})
export class GraphDataComponent {
  employees: Employee[] = [];
  tree: any;

  constructor(private store: Store<EmployeeState>) {
    this.store.select(selectAllEmployees).subscribe((employees) => {
      this.employees = employees;
    });
  }

  ngOnInit() {
    var root = d3
      .stratify()
      .id((d: any) => {
        return d.name;
      })
      .parentId(function (d: any) {
        return d.manager;
      })(this.employees);

    this.tree = root;
  }

  
}
