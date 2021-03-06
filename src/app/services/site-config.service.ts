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
        // return this.af.list('/boody/siteMeta').map(SiteMeta.fromJson)
        return this.af.object('/boody/siteMeta');


    }

    setSiteMeta( val: SiteMeta ): void {
        const itemObservable = this.af.object('/boody/siteMeta');
        itemObservable.update(val);
    }

}
