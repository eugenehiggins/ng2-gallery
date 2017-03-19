import { Inject, Injectable } from '@angular/core';
import { Art } from "../models/art.model";
import { FirebaseApp } from 'angularfire2';


import { BehaviorSubject, Observable } from 'rxjs';
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

    public uploadMessage: BehaviorSubject<string> = new BehaviorSubject("");
    //public _uploadMessage: Observable<string> = this.uploadMessage.asObservable();

    public x = "hello"

    uploadImage(file, metadata) {
        let that = this;

        let promise = new Promise((res, rej) => {
            let uploadTask = this._firebase.storage().ref('images/' + file.name)
                .put(file, metadata);
            uploadTask.on('state_changed', function (snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                that.uploadMessage.next('Upload is ' + progress + '% done');
                //console.log(that.x);
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
