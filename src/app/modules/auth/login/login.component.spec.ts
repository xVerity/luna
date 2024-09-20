import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunaLoginComponent } from './login.component';

describe('LunaLoginComponent', () => {
  let component: LunaLoginComponent;
  let fixture: ComponentFixture<LunaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunaLoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
