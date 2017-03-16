import { Component, OnInit } from '@angular/core';
import { SiteConfigService } from "./services/site-config.service";

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  // title: Ob;

  constructor(private siteConfig: SiteConfigService){
  }

  ngOnInit(){
      // this.title = this.siteConfig.getSiteTitle();
  }
}
