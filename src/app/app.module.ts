import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer, metaReducers } from './store/reducers/employee.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('employee',employeeReducer),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
