import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'site-meta',
  templateUrl: './site-meta.component.html',
  styleUrls: ['./site-meta.component.scss']
})
export class SiteMetaComponent implements OnInit {

  constructor(public fb: FormBuilder ) { }

  public siteMetaForm = this.fb.group({
     siteName: ["name"],
      siteDescription: ["description"]
  });

  onSave() {

  }

  ngOnInit() {
  }

}
