import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'luna-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LunaTestingComponent {}
