import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LilyButtonComponent } from './button.component';

describe('LilyButtonComponent', () => {
  let component: LilyButtonComponent;
  let fixture: ComponentFixture<LilyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LilyButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
