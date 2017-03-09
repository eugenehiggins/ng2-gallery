import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs";
import { SiteConfigService } from "../../services/site-config.service";
import { SiteMeta } from '../../models/site-meta.model';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    @Input() siteTitle: string;

    currentRoute: ActivatedRoute;

    meta$: Observable<SiteMeta>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private siteConfig: SiteConfigService
    ) {}

    ngOnInit() {

        this.siteConfig.getSiteMeta()
            .subscribe(
                 (meta) => {
                     this.meta$ = meta;
                     console.log(this.meta$);
                 }

            )

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                this.currentRoute = this.route.root;
                while (this.currentRoute.children[0] !== undefined) {
                    this.currentRoute = this.currentRoute.children[0];
                }
                console.log(this.currentRoute.snapshot.routeConfig.path);
            })
    }

}
