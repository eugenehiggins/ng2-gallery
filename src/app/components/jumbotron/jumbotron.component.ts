import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../services/content.service";
import { Art } from "../../models/art.model";

@Component({
    selector: 'jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

    featured: Art;
    x: any;

    constructor(private contentService: ContentService) {

    }

    ngOnInit() {
        //this.contentService.getFeatured().then()
        //console.log(this.contentService.getFeatured())
        this.contentService.getFeatured().subscribe( art => console.log(art))

        this.contentService.setFeatured(5);
    }



}
