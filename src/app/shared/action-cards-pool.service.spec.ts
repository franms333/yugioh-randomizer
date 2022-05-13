import { TestBed } from '@angular/core/testing';

import { ActionCardsPoolService } from './action-cards-pool.service';

describe('ActionCardsPoolService', () => {
  let service: ActionCardsPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionCardsPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
