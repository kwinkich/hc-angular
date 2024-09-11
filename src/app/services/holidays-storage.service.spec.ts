import { TestBed } from '@angular/core/testing';

import { HolidaysStorageService } from './holidays-storage.service';

describe('HolidaysStorageService', () => {
  let service: HolidaysStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
