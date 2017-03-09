import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { SiteConfigService } from "../../../../services/site-config.service";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { SiteMeta } from "../../../../models/site-meta.model";

@Component({
    selector: 'site-meta',
    templateUrl: './site-meta.component.html',
    styleUrls: ['./site-meta.component.scss']
})
export class SiteMetaComponent implements OnInit {

    meta$: Observable<SiteMeta>;
    siteName: string;
    siteDescription: string;

    constructor(public fb: FormBuilder,
                public siteConfig: SiteConfigService) {
    }

    public siteMetaForm = this.fb.group({
        siteName: [this.siteName],
        siteDescription: [""]
    });

    onSave() {

    }

    ngOnInit() {
        this.siteConfig.getSiteMeta()
            .subscribe(
                (meta) => {
                    this.siteName = meta.siteName;
                    this.meta$ = meta;
                    console.log(this.siteName);
                }
            )
    }

}
