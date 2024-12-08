import { Component } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, gridViewIcon, homeIcon, userIcon, vmBugIcon } from '@cds/core/icon';


ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(gridViewIcon);
ClarityIcons.addIcons(vmBugIcon);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hierarchical-org-chart-app';
}
