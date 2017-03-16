import { NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteMetaComponent } from './components/site-meta/site-meta.component';

export const DASHBOARD_ROUTES = [
    { path: '', component: DashboardComponent},
    { path: 'site-info', component: SiteMetaComponent }
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
