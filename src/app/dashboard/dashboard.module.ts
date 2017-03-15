import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
      DashboardRoutingModule
  ],
  declarations: [
      DashboardComponent,

  ]
})
export class AdminModule { }
