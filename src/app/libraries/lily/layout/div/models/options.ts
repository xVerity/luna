import { ELilyDivDirection } from './enums/direction';
import { ELilyDivHorizontalAlign } from './enums/horizontal-align';
import { ELilyDivVerticalAlign } from './enums/vertical-align';

/**
 * Describes the layout options for a lily div.
 */
export interface LilyDivOptions {
  /**
   * The vertical alignment of the elements within the div.
   */
  verticalAlign: ELilyDivVerticalAlign;

  /**
   * The horizontal alignment of the elements within the div.
   */
  horizontalAlign: ELilyDivHorizontalAlign;

  /**
   * The direction of the elements within the div.
   */
  direction: ELilyDivDirection;
}
