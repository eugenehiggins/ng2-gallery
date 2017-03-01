/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiteConfigService } from './site-config.service';

describe('SiteConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteConfigService]
    });
  });

  it('should ...', inject([SiteConfigService], (service: SiteConfigService) => {
    expect(service).toBeTruthy();
  }));
});
