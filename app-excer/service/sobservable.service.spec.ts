import { TestBed } from '@angular/core/testing';

import { SobservableService } from './sobservable.service';

describe('SobservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SobservableService = TestBed.get(SobservableService);
    expect(service).toBeTruthy();
  });
});
