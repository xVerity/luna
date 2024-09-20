import { Injectable } from '@angular/core';
import { LilyTheme } from './models/theme';

/**
 * Service for applying themes to the Lily components.
 */
@Injectable({
  providedIn: 'root',
})
export class LilyThemeService {
  /**
   * Applies the given theme to the document.
   * @param a_theme The theme to apply.
   */
  public applyTheme(a_theme: LilyTheme): void {
    for (const [key, value] of Object.entries(a_theme)) {
      document.documentElement.style.setProperty(`--${key}`, value);
    }
  }
}
