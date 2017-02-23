import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";
import { Art } from "../../models/art.model";
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

    featured: Art;
    safeStyle: SafeStyle;
    safeUrl: SafeUrl;

    constructor(private contentService: ContentService, private sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        //this.contentService.getFeatured().then()
        //console.log(this.contentService.getFeatured())
        this.contentService.getFeatured()
            .subscribe( (art) => {
                console.log(art);
                this.featured = art;
            })

        this.safeStyle = this.sanitizer.bypassSecurityTrustStyle("url(assets/art/"+ this.featured.imagePath +")");
        //this.contentService.setFeatured(5);
    }



}
