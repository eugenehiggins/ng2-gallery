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
import { AngularFireModule } from 'angularfire2';

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
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [
        ContentService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
