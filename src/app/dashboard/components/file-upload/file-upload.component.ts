import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseApp } from 'angularfire2';
import 'rxjs/Rx';
import { ContentService } from "../../../services/content.service";

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    _firebase: any;
    success: boolean = false;

    constructor(
        public fb: FormBuilder,
        @Inject(FirebaseApp) firebaseApp: any,
        public contentService: ContentService
    ) {
        this._firebase = firebaseApp;
    }

    public imageUploadForm = this.fb.group({
        name: ["", Validators.required],
        description: ["", Validators.required],
        imagePath: ["", Validators.required]
    });

    ngOnInit() {
    }

    onSave(event) {
        // TODO: only assuming single files right now
        // this might help http://stackoverflow.com/questions/40214772/file-upload-in-angular-2
        //http://www.muhammetbakan.com/angular2-ionic2-how-to-upload-and-get-image-from-firebase-storage/

        // get file
        let file: File = event.target.imagePath.files[0];
        let name: string = event.target.name;
        let description: string = event.target.name;
        let downloadURL: any = {};


        // create metadata
        let metadata = {
            contentType: "image/jpeg"
        }

        this.contentService.uploadImage(file,metadata)
            .then(
                (url) => {
                    downloadURL = url;
                    this.success = true;
                    console.log(downloadURL);
                }
            )
        ;

    }

}
