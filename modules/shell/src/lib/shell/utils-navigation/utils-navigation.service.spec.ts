import { TestBed } from '@angular/core/testing';

import { UtilsNavigationService } from './utils-navigation.service';

describe('UtilsNavigationService', () => {
  let service: UtilsNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
