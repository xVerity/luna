import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lily-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LilyButtonComponent {
  /**
   * The label of the button.
   */
  @Input()
  public label: string | null = null;
}
