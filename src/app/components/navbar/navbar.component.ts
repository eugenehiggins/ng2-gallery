import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <div class="navbar navbar-inverse bg-inverse">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand">Album</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
    
  `
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
