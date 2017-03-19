import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
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
    progress: string;
    @ViewChild('saveButton') saveButton;
    imageType: string = "";

    formIsValid: boolean = false;

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
        imagePath: ["", Validators.compose([this.validateFileInput])]
    });

    ngOnInit() {
    }

    // When file upload input is used
    onChange(event) {
        if (event.target.files[0]) {
            this.imageType = event.target.files[0].type;
        } else {
            this.imageType = "";
        }


    }

    validateFileInput(): ValidatorFn {
        return (c: AbstractControl) => {
            //let isValid = this.imageType === "image/jpeg" || this.imageType === "image/png";
            let isValid = c.value != ""
            if(c.value != "") {
            //if(this.imageType != ""){
                return null;
            } else {
                return {

                    notValid: true
                }
            }
        }
    }

    onSave(event) {
        // TODO: only assuming single files right now
        // this might help http://stackoverflow.com/questions/40214772/file-upload-in-angular-2
        //http://www.muhammetbakan.com/angular2-ionic2-how-to-upload-and-get-image-from-firebase-storage/

        // disable button so it can't be double clicked
        event.target.saveButton.disabled = true;

        // get file
        let file: File = event.target.imagePath.files[0];
        let fileType: string = file.type;
        let name: string = event.target.name.value;
        let description: string = event.target.description.value;
        let downloadURL:URL;


        // create metadata
        let metadata = {
            contentType: fileType,
            customMetadata: {
               'name': name,
                'description': description
            }
        }

        // this.contentService.currentUploadMessage
        //     .subscribe();

        this.contentService.uploadMessage.subscribe(
            x => this.progress = x
        )

        this.contentService.uploadImage(file,metadata)
            .then(
                (url) => {
                    //const downloadURL = new URL(JSON.stringify((url)));
                    //this.success = true;
                    //this.storeImageInfo(downloadURL,name,description);
                }
            );

    };

    // Called once image is successfully stored.
    // This saves image metadata: name, description, featured, etc
    // storeImageInfo(url: URL, name: string, description: string) {
    //
    // }

}
