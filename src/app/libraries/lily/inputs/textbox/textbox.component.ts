import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lily-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LilyTextboxComponent {}
