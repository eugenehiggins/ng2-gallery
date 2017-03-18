import { Inject, Injectable } from '@angular/core';
import { Art } from "../models/art.model";
import { FirebaseApp } from 'angularfire2';


import { Observable } from 'rxjs';
import { ART } from './mock-art';

@Injectable()
export class ContentService {
    _firebase: any;

    private featured: Art = {
        name: "number 1",
        description: "the first one",
        imagePath: "art1.jpg"
    }

    constructor(
        @Inject(FirebaseApp) firebaseApp: any
    ) {
        this._firebase = firebaseApp;
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

    public uploadMessage: Observable<string>;



    uploadImage(file, metadata) {
        let promise = new Promise((res, rej) => {
            let uploadTask = this._firebase.storage().ref('images/' + file.name)
                .put(file, metadata);
            uploadTask.on('state_changed', function (snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.uploadMessage = 'Upload is ' + progress + '% done';
                console.log(this.uploadMessage);
            }, function (error) {
                rej(error);
            }, function () {
                this.success = true;
                let downloadURL = uploadTask.snapshot.downloadURL;
                res(downloadURL);
            });

        });
        return promise;
    }
}
