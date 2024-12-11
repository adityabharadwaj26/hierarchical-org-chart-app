import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import {
  ClarityIcons,
  gridViewIcon,
  homeIcon,
  vmBugIcon,
} from '@cds/core/icon';
import { Store } from '@ngrx/store';
import { loadEmployees } from './state/employee.actions';
import { EmployeeState } from './state/employee.reducer';

ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(gridViewIcon);
ClarityIcons.addIcons(vmBugIcon);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'hierarchical-org-chart-app';
  
  constructor(private ApiService: ApiService, private store: Store<EmployeeState>) {}
  
  ngOnInit() {
    this.ApiService.loadAllDatatoLocalStorage();
    this.store.dispatch(loadEmployees());
  }
}
