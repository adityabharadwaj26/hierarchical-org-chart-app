import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as d3 from 'd3';
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
    this.render('treeContainer', this.tree);
  }

  handleAction() {
    console.log('handleaction');
  }

  render(containerId: string, treeData: any) {
    const container = d3.select(`#${containerId}`);

    const treeLayout = d3
      .tree()
      .size([600, 800])
      .separation((a, b) => (a.parent === b.parent ? 2 : 3));

    const root = d3.hierarchy(treeData);
    const tree = treeLayout(root);

    const xOffset = 200;
    const yOffset = 0;
    // Render nodes as cards
    const nodes = container
      .selectAll('.node-card')
      .data(tree.descendants())
      .enter()
      .append('div')
      .attr('class', 'node-card')
      .style('position', 'absolute')
      .style('border', '1px solid #ccc')
      .style('border-radius', '8px')
      .style('padding', '16px')
      .style('width', '200px')
      .style('background-color', '#f9f9f9')
      .style('box-shadow', '0px 4px 6px rgba(0, 0, 0, 0.1)')
      .style('transform', 'translate(-50%, -50%)')
      .style('left', (d) => `${d.y + xOffset}px`)
      .style('top', (d) => `${d.x + yOffset}px`)
      .style('cursor', 'pointer');

    nodes
      .append('h4')
      .text((d: any) => d.data.id)
      .style('margin', '0 0 8px 0');

    nodes
      .append('p')
      .text((d: any) => d.data.data.designation)
      .style('margin', '0');

    nodes
      .append('button')
      .attr('class', 'btn btn-icon')
      .style('position', 'absolute')
      .style('top', '0px')
      .style('right', '0px')
      .style('background', 'none')
      .style('border', 'none')
      .style('cursor', 'pointer')
      .html(
        `
          <cds-icon shape="cog"></cds-icon>
          `
      )
      .on('click', function (event, d: any) {
        console.log(this.parentNode?.parentNode?.parentElement);
      });

    nodes.style('z-index', 1);

    // Add interactivity
    nodes
      .on('mouseover', function () {
        d3.select(this)
          .style('background-color', '#e9f7f7')
          .style('box-shadow', '0px 6px 12px rgba(0, 0, 0, 0.2)');
      })
      .on('mouseout', function () {
        d3.select(this)
          .style('background-color', '#f9f9f9')
          .style('box-shadow', '0px 4px 6px rgba(0, 0, 0, 0.1)');
      });

    // Draw links
    const links = container
      .selectAll('.link')
      .data(tree.links())
      .enter()
      .append('svg')
      .attr('class', 'link')
      .style('position', 'absolute')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('pointer-events', 'none');

    links
      .append('path')
      .attr(
        'd',
        (d) => `
          M ${d.source.y + xOffset},${d.source.x + yOffset}
          C ${(d.source.y + d.target.y) / 2 + xOffset},${d.source.x + yOffset}
            ${(d.source.y + d.target.y) / 2 + xOffset},${d.target.x + yOffset}
            ${d.target.y + xOffset},${d.target.x + yOffset}
        `
      )
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2);
  }
}
