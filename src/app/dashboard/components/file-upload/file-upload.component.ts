import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  onSave() {
      console.log(this.imageUploadForm.value);
  }

}
