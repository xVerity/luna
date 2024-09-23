import { TestBed } from '@angular/core/testing';
import { CassThemeService } from './theme.service';

describe('CassThemeService', () => {
  let service: CassThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CassThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
