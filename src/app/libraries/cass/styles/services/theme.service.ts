import { Injectable } from '@angular/core';
import { CassTheme } from '../models/theme';

/**
 * Service that allows setting theme values for the custom
 * CSS classes offered by the Cass library.
 */
@Injectable({
  providedIn: 'root',
})
export class CassThemeService {
  /**
   * Applies the given theme to the document.
   * @param a_theme The theme to apply.
   */
  public applyTheme(a_theme: CassTheme): void {
    Object.keys(a_theme).forEach((key) => {
      const value = a_theme[key as keyof CassTheme];
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }
}
