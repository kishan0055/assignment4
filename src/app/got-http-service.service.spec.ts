import { TestBed, inject } from '@angular/core/testing';

import { GotHttpService } from './got-http-service.service';

describe('GotHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotHttpService]
    });
  });

  it('should be created', inject([GotHttpService], (service: GotHttpService) => {
    expect(service).toBeTruthy();
  }));
});
