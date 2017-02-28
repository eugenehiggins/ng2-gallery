import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class SiteConfigService {

    siteName: string;

    constructor() {
    }

    getSiteTitle():Observable<string> {

        this.siteName = Observable.create(observer => {
            // Yield a single value and complete
            observer.onNext("BoodySuperPower");
            observer.onCompleted();

            // Any cleanup logic might go here
            return () => console.log('disposed')
        });
        return Observable.of(this.siteName);
    }

}
