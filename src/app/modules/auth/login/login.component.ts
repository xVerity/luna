import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'luna-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LunaLoginComponent {}
