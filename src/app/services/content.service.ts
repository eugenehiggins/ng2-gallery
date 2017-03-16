import { Injectable } from '@angular/core';
import { Art } from "../models/art.model";

import { Observable } from 'rxjs';
import { ART } from './mock-art';

@Injectable()
export class ContentService {

    private featured: Art = {
        name: "number 1",
        description: "the first one",
        imagePath: "art1.jpg"
    }

    private file = "";

    constructor() {
    }


    getFeatured(): Observable<Art> {
        return Observable.of(this.featured)
    }
    setFeatured(value: number): void {
        this.featured.name = "number " + value;
        //return Observable.of(this.featured)
    }

    getArt(): Observable<Art[]> {
        return Observable.of(ART);
    }

    addImage(): void {

    }
}
