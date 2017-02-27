import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AlbumComponent } from './components/album/album.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentService } from "./services/content.service";
import { FrontPageComponent } from './front-page.component';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        JumbotronComponent,
        AlbumComponent,
        FooterComponent,
        FrontPageComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
                }
            }
        ])
    ],
    providers: [
        ContentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
