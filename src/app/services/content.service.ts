import { Injectable } from '@angular/core';
import { Art } from "../models/art.model";
import rxjs from 

@Injectable()
export class ContentService {

    private featured: Art = {
        name: "number 1",
        description: "the first one",
        imagePath: "https://www.conncoll.edu/media/major-images/Art.jpg"
    }

    constructor() {
    }

    getFeatured(): Promise<Art> {
        return this.featured;
    }

}
