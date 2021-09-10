import { TestBed } from '@angular/core/testing';

import { EmployeesFascadeService } from './employees-fascade.service';

describe('EmployeesFascadeService', () => {
  let service: EmployeesFascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesFascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
