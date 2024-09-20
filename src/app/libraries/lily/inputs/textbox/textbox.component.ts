import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CassFormValueAccessor } from '@cass/bases/form-value-accessor';

/**
 * A textbox component with common input features.
 */
@Component({
  selector: 'lily-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LilyTextboxComponent extends CassFormValueAccessor<string> {
  /**
   * The label of the textbox.
   */
  @Input()
  public label: string | null = null;

  constructor() {
    super();
  }
}
