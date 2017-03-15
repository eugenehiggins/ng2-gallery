import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteMetaComponent } from './dashboard/components/site-meta/site-meta.component';

const routes: Routes = [
    {
        path: '',
        component: FrontPageComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            name: 'hello there'
        },
        children: [
            { path: '', redirectTo: 'site-meta', pathMatch: 'full' },
            { path: 'site-meta', component: SiteMetaComponent }
        ]
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
