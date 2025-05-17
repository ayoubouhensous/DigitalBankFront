import { TestBed } from '@angular/core/testing';

import { CusotmerserviceService } from './cusotmerservice.service';

describe('CusotmerserviceService', () => {
  let service: CusotmerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CusotmerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
