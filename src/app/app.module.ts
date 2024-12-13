import { employeeReducer, EmployeeState } from './state/employee.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ClarityModule, ClrDropdownModule } from '@clr/angular';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { GridModule } from './components/grid/grid.module';
import { GraphModule } from './components/graph/graph.module';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './state/employee.effects';

@NgModule({
  declarations: [AppComponent, HomeContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        employeeState: employeeReducer,
      },
      {}
    ),
    ClarityModule,
    GridModule,
    GraphModule,
    EffectsModule.forRoot([EmployeeEffects]),
    ClrDropdownModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
