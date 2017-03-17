import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseApp } from 'angularfire2';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    _firebase: any;

    constructor(public fb: FormBuilder, @Inject(FirebaseApp) firebaseApp: any) {
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
        let storage = this._firebase.storage();
        let storageRef = storage.ref();

        // create metadata
        let metadata = {
            contentType: "image/jpeg"
        }

        let promise = new Promise((res, rej) => {
            let uploadTask = this._firebase.storage().ref('images/' + file.name)
                .put(file, metadata);
            uploadTask.on('state_changed', function (snapshot) {
                console.log('file uploaded')
            }, function (error) {
                rej(error);
            }, function () {
                let downloadURL = uploadTask.snapshot.downloadURL;
                console.log(downloadURL);
                res(downloadURL);
            });

        });
        return promise;
    }

}
