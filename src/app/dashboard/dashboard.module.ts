import { NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const DASHBOARD_ROUTES = [
    { path: '', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
      DashboardComponent

  ]
})
export class DashboardModule { }
