import { Injectable } from '@angular/core';
import { CassThemeService } from '@cass/styles/services/theme.service';
import { LILY_DEFAULT_THEME } from '@lily/theme/models/collection/default/default.const';
import { LilyThemeService } from '@lily/theme/theme.service';
import {
  LUNA_DEFAULT_CASS_THEME,
  LUNA_DEFAULT_THEME,
} from './models/collections/default/default-const';
import { ELunaTheme } from './models/enums/theme';
import { LunaTheme } from './models/theme';

/**
 * Service that manages the theme of the Luna application.
 */
@Injectable({
  providedIn: 'root',
})
export class LunaThemeService {
  constructor(
    private readonly m_lilyTheme: LilyThemeService,
    private readonly m_cassTheme: CassThemeService
  ) {}

  /**
   * Applies a theme to the Luna application.
   * @param a_theme The theme to apply.
   */
  public applyTheme(a_theme: ELunaTheme): void {
    switch (a_theme) {
      case ELunaTheme.Default:
        this.applyThemeIntern(LUNA_DEFAULT_THEME);
        this.m_lilyTheme.applyTheme(LILY_DEFAULT_THEME);
        this.m_cassTheme.applyTheme(LUNA_DEFAULT_CASS_THEME);
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
