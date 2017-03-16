import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { SiteMetaComponent } from './dashboard/components/site-meta/site-meta.component';
import { DASHBOARD_ROUTES } from './dashboard/dashboard.module';

const routes: Routes = [
    {
        path: '',
        component: FrontPageComponent
    },
    {
        path: 'front-page',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        data: {
            name: 'hello there'
        },
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
