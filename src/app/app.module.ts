import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ClarityModule } from '@clr/angular';
import { TableViewComponent } from './components/grid/table-view/table-view.component';
import { TableDataComponent } from './components/grid/table-data/table-data.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { GridModule } from './components/grid/grid.module';
import { GraphModule } from './components/graph/graph.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    StoreModule.forRoot({}, {}),
    ClarityModule,
    GridModule,
    GraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
