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

  constructor(public siteConfig: SiteConfigService) { }

  ngOnInit() {
      this.siteConfig.getSiteMeta()
          .subscribe(
              (meta) => {
                  this.meta$ = meta;
              }

          )
  }

}
