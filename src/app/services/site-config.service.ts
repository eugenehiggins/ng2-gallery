import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFire, AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { SiteMeta } from '../models/site-meta.model';

@Injectable()
export class SiteConfigService {

    meta: SiteMeta;

    constructor(private af: AngularFireDatabase) {

    }

    getSiteMeta(): Observable<any> {
        return this.af.list('/boody/siteMeta').map(results => results[0])
    }


}
