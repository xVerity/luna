import { TestBed } from '@angular/core/testing';
import { LilyThemeService } from './theme.service';

describe('LilyThemeService', () => {
  let service: LilyThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LilyThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
