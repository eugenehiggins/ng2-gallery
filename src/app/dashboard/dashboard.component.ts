import { Component, OnInit } from '@angular/core';
import { SiteConfigService } from "../services/site-config.service";
import { Observable } from "rxjs";
import { SiteMeta } from "../models/site-meta.model";

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    meta$: Observable<SiteMeta>;
    sidebarIsVisible: boolean = false;

  constructor(public siteConfig: SiteConfigService) { }

  ngOnInit() {
      this.siteConfig.getSiteMeta()
          .subscribe(
              (meta) => {
                  this.meta$ = meta;
              }

          )
  }

  toggleSidebar(event){
    this.sidebarIsVisible = !this.sidebarIsVisible;
      console.log(this.sidebarIsVisible)
  }

}

// $(document).ready(function() {
//     alert("howdy");
//     $('[data-toggle=offcanvas]').click(function() {
//         $('.row-offcanvas').toggleClass('active');
//     });
//
// });
