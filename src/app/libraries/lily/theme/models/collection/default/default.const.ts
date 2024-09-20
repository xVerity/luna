import { LILY_DEFAULT_COLORS } from '@lily/theme/models/collection/default/default-colors';
import { LilyInputsTheme } from '@lily/theme/models/sub-themes/inputs/inputs';
import { LilyTheme } from '@lily/theme/models/theme';
import { LilyButtonsTheme } from '../../sub-themes/buttons/buttons';

const LILY_DEFAULT_INPUTS_THEME: LilyInputsTheme = {
  lilyInputBackgroundColor: LILY_DEFAULT_COLORS.INPUT_BACKGROUND_COLOR,
  lilyInputBorderColor: LILY_DEFAULT_COLORS.INPUT_BORDER_COLOR,
  lilyInputFontColor: LILY_DEFAULT_COLORS.INPUT_FONT_COLOR,
  lilyInputFocusBackgroundColor:
    LILY_DEFAULT_COLORS.INPUT_FOCUS_BACKGROUND_COLOR,
  lilyInputFocusBorderColor: LILY_DEFAULT_COLORS.INPUT_FOCUS_BORDER_COLOR,
  lilyInputFocusFontColor: LILY_DEFAULT_COLORS.INPUT_FOCUS_FONT_COLOR,
  lilyInputDisabledBackgroundColor:
    LILY_DEFAULT_COLORS.INPUT_DISABLED_BACKGROUND_COLOR,
  lilyInputDisabledBorderColor: LILY_DEFAULT_COLORS.INPUT_DISABLED_BORDER_COLOR,
  lilyInputDisabledFontColor: LILY_DEFAULT_COLORS.INPUT_DISABLED_FONT_COLOR,
  lilyInputHoverBackgroundColor:
    LILY_DEFAULT_COLORS.INPUT_HOVER_BACKGROUND_COLOR,
  lilyInputHoverBorderColor: LILY_DEFAULT_COLORS.INPUT_HOVER_BORDER_COLOR,
  lilyInputHoverFontColor: LILY_DEFAULT_COLORS.INPUT_HOVER_FONT_COLOR,
};

const LILY_DEFAULT_BUTTONS_THEME: LilyButtonsTheme = {
  lilyButtonBackgroundColor: LILY_DEFAULT_COLORS.BUTTON_BACKGROUND_COLOR,
  lilyButtonBorderColor: LILY_DEFAULT_COLORS.BUTTON_BORDER_COLOR,
  lilyButtonFontColor: LILY_DEFAULT_COLORS.BUTTON_FONT_COLOR,
  lilyButtonFocusBackgroundColor:
    LILY_DEFAULT_COLORS.BUTTON_FOCUS_BACKGROUND_COLOR,
  lilyButtonFocusBorderColor: LILY_DEFAULT_COLORS.BUTTON_FOCUS_BORDER_COLOR,
  lilyButtonFocusFontColor: LILY_DEFAULT_COLORS.BUTTON_FOCUS_FONT_COLOR,
  lilyButtonDisabledBackgroundColor:
    LILY_DEFAULT_COLORS.BUTTON_DISABLED_BACKGROUND_COLOR,
  lilyButtonDisabledBorderColor:
    LILY_DEFAULT_COLORS.BUTTON_DISABLED_BORDER_COLOR,
  lilyButtonDisabledFontColor: LILY_DEFAULT_COLORS.BUTTON_DISABLED_FONT_COLOR,
  lilyButtonHoverBackgroundColor:
    LILY_DEFAULT_COLORS.BUTTON_HOVER_BACKGROUND_COLOR,
  lilyButtonHoverBorderColor: LILY_DEFAULT_COLORS.BUTTON_HOVER_BORDER_COLOR,
  lilyButtonHoverFontColor: LILY_DEFAULT_COLORS.BUTTON_HOVER_FONT_COLOR,
};

export const LILY_DEFAULT_THEME: LilyTheme = {
  ...LILY_DEFAULT_INPUTS_THEME,
  ...LILY_DEFAULT_BUTTONS_THEME,
};
