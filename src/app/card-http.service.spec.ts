import { TestBed, inject } from '@angular/core/testing';

import { CardHttpService } from './card-http.service';

describe('CardHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardHttpService]
    });
  });

  it('should be created', inject([CardHttpService], (service: CardHttpService) => {
    expect(service).toBeTruthy();
  }));
});
