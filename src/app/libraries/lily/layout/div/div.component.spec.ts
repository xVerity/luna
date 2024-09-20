import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LilyDivComponent } from './div.component';

describe('LilyDivComponent', () => {
  let component: LilyDivComponent;
  let fixture: ComponentFixture<LilyDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LilyDivComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
