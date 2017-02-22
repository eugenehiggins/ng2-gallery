import { Injectable } from '@angular/core';
import { Art } from "../models/art.model";
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {

    private featured: Art = {
        name: "number 1",
        description: "the first one",
        imagePath: "art1.jpg"
    }

    constructor() {
    }

    getFeatured(): Observable<Art> {
        return Observable.of(this.featured)
    }
    setFeatured(value: number): void {
        this.featured.name = "number " + value;
        //return Observable.of(this.featured)
    }
}
