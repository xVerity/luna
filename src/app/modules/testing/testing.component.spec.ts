import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaTestingComponent } from './testing.component';

describe('LunaTestingComponent', () => {
  let component: LunaTestingComponent;
  let fixture: ComponentFixture<LunaTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunaTestingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
