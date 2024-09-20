import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'luna-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LunaPresentationComponent {}
