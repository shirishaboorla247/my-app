import { TestBed } from '@angular/core/testing';

import { Flipkart1Service } from './flipkart1.service';

describe('Flipkart1Service', () => {
  let service: Flipkart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flipkart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
