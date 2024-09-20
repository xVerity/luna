import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LilyTextboxComponent } from './textbox.component';

describe('LilyTextboxComponent', () => {
  let component: LilyTextboxComponent;
  let fixture: ComponentFixture<LilyTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LilyTextboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilyTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
