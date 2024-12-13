import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { HierarchyPointLink } from 'd3-hierarchy';
import { D3Cards } from './d3-cards';
import { ClarityIcons, cogIcon } from '@cds/core/icon';

ClarityIcons.addIcons(cogIcon);
@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss'],
})
export class GraphViewComponent {
  @Input() tree: any;

  @ViewChild('treeContainer', { static: true }) treeContainer!: ElementRef;

  openOverflow: boolean = false;
  ngOnInit(): void {
    const d3Cards = new D3Cards();
    d3Cards.render('treeContainer', this.tree);
  }

  handleAction() {
    console.log('handleaction')
  }

}
