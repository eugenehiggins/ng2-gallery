import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'front-page',
    template: `
        <jumbotron></jumbotron>
        <album></album>
        <my-footer></my-footer>
        <svg xmlns="http://www.w3.org/2000/svg" width="296" height="280" viewBox="0 0 296 280" preserveAspectRatio="none" style="display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;"><defs><style type="text/css"></style></defs><text x="0" y="15" style="font-weight:bold;font-size:15pt;font-family:Arial, Helvetica, Open Sans, sans-serif">296x280</text></svg>
    `,
    styleUrls: ['front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
