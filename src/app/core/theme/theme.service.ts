import { Injectable } from '@angular/core';
import { LUNA_DEFAULT_THEME } from './models/collections/default/default-const';
import { ELunaTheme } from './models/enums/theme';
import { LunaTheme } from './models/theme';

/**
 * Service that manages the theme of the Luna application.
 */
@Injectable({
  providedIn: 'root',
})
export class LunaThemeService {
  public applyTheme(a_theme: ELunaTheme): void {
    switch (a_theme) {
      case ELunaTheme.Default:
        this.applyThemeIntern(LUNA_DEFAULT_THEME);
        break;
      case ELunaTheme.Dark:
      case ELunaTheme.Light:
        throw new Error(
          `LunaThemeService: Dark and Light themes are not supported yet.`
        );
      default:
        throw new Error(`LunaThemeService: Theme ${a_theme} is not supported.`);
    }
  }

  /**
   * Applies a theme to the Luna application.
   * @param a_theme The theme to apply.
   */
  private applyThemeIntern(a_theme: LunaTheme): void {
    Object.keys(a_theme).forEach((property) => {
      document.documentElement.style.setProperty(
        `--${property}`,
        a_theme[property as keyof LunaTheme]
      );
    });
  }
}
