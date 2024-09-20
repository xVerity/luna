import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ELilyDivDirection } from './models/enums/direction';
import { ELilyDivHorizontalAlign } from './models/enums/horizontal-align';
import { ELilyDivVerticalAlign } from './models/enums/vertical-align';
import { LilyDivOptions } from './models/options';

@Component({
  selector: 'lily-div',
  standalone: false,
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LilyDivComponent implements AfterViewInit {
  /**
   * Describes the layout options for the lily div.
   * @default { verticalAlign: ELilyDivVerticalAlign.Center, horizontalAlign: ELilyDivHorizontalAlign.Center }
   */
  @Input() options: LilyDivOptions = {
    verticalAlign: ELilyDivVerticalAlign.Center,
    horizontalAlign: ELilyDivHorizontalAlign.Center,
    direction: ELilyDivDirection.Column,
  };

  @ViewChild('lilyDiv', { static: true })
  lilyDiv: ElementRef<HTMLDivElement> | null = null;

  private get divElement(): HTMLDivElement {
    if (!this.lilyDiv) {
      throw new Error('LilyDivComponent: Div element is not defined.');
    }
    return this.lilyDiv.nativeElement;
  }

  public ngAfterViewInit(): void {
    this.applyOptions();
  }

  private applyOptions(): void {
    if (this.options) {
      this.applyVerticalAlign(this.options.verticalAlign);
      this.applyHorizontalAlign(this.options.horizontalAlign);
      this.applyDirection(this.options.direction);
    }
  }

  private applyVerticalAlign(a_verticalAlign: ELilyDivVerticalAlign): void {
    switch (a_verticalAlign) {
      case ELilyDivVerticalAlign.Top:
      case ELilyDivVerticalAlign.Center:
      case ELilyDivVerticalAlign.Bottom:
        this.divElement.classList.add(a_verticalAlign);
        break;
      default:
        throw new Error(
          `LilyDivComponent: Unsupported vertical alignment: ${a_verticalAlign}`
        );
    }
  }

  private applyDirection(a_direction: ELilyDivDirection): void {
    switch (a_direction) {
      case ELilyDivDirection.Row:
      case ELilyDivDirection.Column:
        this.divElement.classList.add(a_direction);
        break;
      default:
        throw new Error(
          `LilyDivComponent: Unsupported direction: ${a_direction}`
        );
    }
  }

  private applyHorizontalAlign(
    a_horizontalAlign: ELilyDivHorizontalAlign
  ): void {
    switch (a_horizontalAlign) {
      case ELilyDivHorizontalAlign.Left:
      case ELilyDivHorizontalAlign.Center:
      case ELilyDivHorizontalAlign.Right:
        this.divElement.classList.add(a_horizontalAlign);
        break;
      default:
        throw new Error(
          `LilyDivComponent: Unsupported horizontal alignment: ${a_horizontalAlign}`
        );
    }
  }
}
