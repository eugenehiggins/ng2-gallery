import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Headers } from "@angular/http";

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

    public imageUploadForm = this.fb.group({
        name: [ "", Validators.required ],
        description: [ "", Validators.required ],
        imagePath: [ "", Validators.required ]
    });

  ngOnInit() {
  }

  onSave(event) {
      // TODO: only assuming single files right now
      let file: File = event.target.imagePath.files;
      let formData:FormData = new FormData();
      formData.append('loadFile', file, file.name);
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application')
     console.log( );
  }

}
