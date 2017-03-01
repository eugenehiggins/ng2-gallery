import { Component, OnInit } from '@angular/core';
import { SiteConfigService } from "./services/site-config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title: Ob;

  constructor(private siteConfig: SiteConfigService){
  }

  ngOnInit(){
      // this.title = this.siteConfig.getSiteTitle();
  }
}
