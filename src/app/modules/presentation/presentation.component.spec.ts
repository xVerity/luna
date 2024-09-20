import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaPresentationComponent } from './presentation.component';

describe('LunaPresentationComponent', () => {
  let component: LunaPresentationComponent;
  let fixture: ComponentFixture<LunaPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunaPresentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
