import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AlbumComponent } from './components/album/album.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentService } from "./services/content.service";
import { FrontPageComponent } from './front-page.component';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SiteConfigService } from "./services/site-config.service";
import { AngularFireModule } from 'angularfire2';
import { SiteMetaComponent } from './components/dashboard/components/site-meta/site-meta.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAx0Wo5qiYzps_kReaCLr4AzlhYLFvK-MU",
    authDomain: "gene-higgins.firebaseapp.com",
    databaseURL: "https://gene-higgins.firebaseio.com",
    storageBucket: "gene-higgins.appspot.com",
    messagingSenderId: "557188003562"
};

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        JumbotronComponent,
        AlbumComponent,
        FooterComponent,
        FrontPageComponent,
        DashboardComponent,
        SiteMetaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        ReactiveFormsModule,
        RouterModule.forRoot([
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
        ])
    ],
    providers: [
        ContentService,
        SiteConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
