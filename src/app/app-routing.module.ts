import { HomeContainerComponent } from './components/home-container/home-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableDataComponent } from './components/grid/table-data/table-data.component';
import { GraphDataComponent } from './components/graph/graph-data/graph-data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      { path: 'GridView', component: TableDataComponent },
      { path: 'GraphView', component: GraphDataComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
