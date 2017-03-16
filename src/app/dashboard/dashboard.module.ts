import { NgModule } from '@angular/core';
import { DashboardComponent } from "./dashboard.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SiteMetaComponent } from './components/site-meta/site-meta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './components/overview/overview.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

export const DASHBOARD_ROUTES = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'site-info',
                component: SiteMetaComponent
            },
            {
                path: 'file-upload',
                component: FileUploadComponent
            }
        ]
    },
    {

    }
]

@NgModule({
    imports: [
        RouterModule.forChild(DASHBOARD_ROUTES),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        DashboardComponent,
        SiteMetaComponent,
        OverviewComponent,
        FileUploadComponent
    ]
})
export class DashboardModule {
}
