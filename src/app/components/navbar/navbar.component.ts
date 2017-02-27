import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    currentRoute: ActivatedRoute;
    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
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
