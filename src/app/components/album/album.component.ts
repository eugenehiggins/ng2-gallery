import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Art } from '../../models/art.model';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
    allArt: Art[];

    constructor(private contentService: ContentService) {
    }

    ngOnInit() {
        this.getArt();
    }

    getArt(): void {
        this.contentService.getArt()
            .subscribe( (art) => {
                this.allArt = art;
                console.log(this.allArt);
            });
    }

}
