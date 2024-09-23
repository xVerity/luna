import { CassTheme } from '@cass/styles/models/theme';
import { LunaTheme } from '@core/theme/models/theme';
import { LUNA_DEFAULT_COLORS } from './default-colors';

export const LUNA_DEFAULT_THEME: LunaTheme = {
  lunaBackgroundColor: LUNA_DEFAULT_COLORS.BACKGROUND_COLOR,
  lunaFontColor: LUNA_DEFAULT_COLORS.FONT_COLOR,
};

export const LUNA_DEFAULT_CASS_THEME: CassTheme = {
  cassBackgroundColor: LUNA_DEFAULT_COLORS.BACKGROUND_COLOR,
  cassFontColor: LUNA_DEFAULT_COLORS.FONT_COLOR,
  cassBorderColor: LUNA_DEFAULT_COLORS.FONT_COLOR,
};
