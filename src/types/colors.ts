export enum DefaultColors {
  DIAMOND = '#B9E9FF',
  DIAMOND_DARK = '#a3e2ff',
  LIGHT_SILVER = '#D9D9D9',
  LIGHT_SILVER_3 = 'rgba(217, 217, 217, 0.03)',
  SPANISH_GRAY = '#949495',
  CHARLESTON_GREEN = '#282828',
  MAXIMUM_BLUE = '#3aa6d1',
  GREEN_MEDIUM = '#043f2e',
  GREEN_MEDIUM_20 = 'rgba(4, 63, 46, 0.2)',
  GREEN_MEDIUM_50 = 'rgba(4, 63, 46, 0.5)',
  GREEN_BRIGHT = '#b8de72',
  VIVID_LIME_GREEN = '#B2D818',
  BATTERY_CHARGED_BLUE = '#189CD8',
  BATTERY_CHARGED_BLUE_5 = 'rgba(24, 156, 216, 0.05)',
  BATTERY_CHARGED_BLUE_20 = 'rgba(24, 156, 216, 0.20)',
  BATTERY_CHARGED_BLUE_50 = 'rgba(24, 156, 216, 0.50)',
  BATTERY_CHARGED_BLUE_DARK = '#072f41',
  BATTERY_CHARGED_BLUE_EXTRADARK = '#062736',
  EERIE_BLACK = '#1E1E1E',
  EXTRADARK_GRAY = '#1D1D1B',
  CHINESE_BLACK = '#141414',
  BRIGHT_GRAY = '#ECECEC',
  ARSENIC = '#424242',
  CULTURED = '#F6F7F8',
  LAVA = '#CF1322',
  LIGHT_CARMINE_PINK = '#e86e6b',
  VENETIAN_RED = '#ff7875',
  ERROR_RED = '#DC4446',
  YELLOW_LIGHT = '#FFF4DF',
  YELLOW_MEDIUM = '#F09C00',
  YELLOW_DARK = '#362f22',
  RED_LIGHT = '#FEDCDF',
  RED_MEDIUM = '#F94E5D',
  RED_DARK = '#442c2e',
  RED_WINE = 'rgb(129, 0, 45)',
  CRIMSON_LIGHT = '#fedcf5',
  CRIMSON_MEDIUM = '#bf2559',
  CRIMSON_DARK = '#492740',
  GREEN_LIGHT = '#4c8776',
  GREEN_MEDIUM_2 = '#008234',
  GREEN_DARK = '#233028',
  ORANGE_LIGHT = '#fedec1',
  ORANGE_MEDIUM = '#c45e04',
  ORANGE_DARK = '#372e26',
  PURPLE_LIGHT = '#e6d9ff',
  PURPLE_MEDIUM = '#9352b5',
  PURPLE_DARK = '#3b324c',
  BLUE_LIGHT = '#c1ebff',
  BLUE_DARK = '#24343b',
  WHITE = '#FFFFFF',
  WHITE_4 = 'rgba(255, 255, 255, 0.04)',
  WHITE_10 = 'rgba(255, 255, 255, 0.10)',
  WHITE_40 = 'rgba(255, 255, 255, 0.40)',
  BLACK = '#000000',
  BLACK_1 = 'rgba(0, 0, 0, 0.01)',
  BLACK_3 = 'rgba(0, 0, 0, 0.03)',
  BLACK_4 = 'rgba(0, 0, 0, 0.04)',
  BLACK_5 = 'rgba(0, 0, 0, 0.05)',
  BLACK_20 = 'rgba(0, 0, 0, 0.20)',
  BLACK_60 = 'rgba(0, 0, 0, 0.60)',
  DARK_GRAY_50 = 'rgba(25, 25, 25, 0.50)',
  LIGHT_GRAY = '#fcfcfc',
}

export enum DarkColors {
  PRIMARY_COLOR = DefaultColors.GREEN_MEDIUM,

  MAIN_BG_COLOR = DefaultColors.EERIE_BLACK,
  MAIN_BG_COLOR_2 = DefaultColors.CHARLESTON_GREEN,
  MAIN_BG_COLOR_3 = DefaultColors.WHITE_4,
  YELLOW_BG_COLOR = DefaultColors.YELLOW_DARK,
  RED_BG_COLOR = DefaultColors.RED_DARK,
  GREEN_BG_COLOR = DefaultColors.GREEN_DARK,
  ORANGE_BG_COLOR = DefaultColors.ORANGE_DARK,
  BLUE_BG_COLOR = DefaultColors.BLUE_DARK,
  CRIMSON_BG_COLOR = DefaultColors.CRIMSON_DARK,
  PURPLE_BG_COLOR = DefaultColors.PURPLE_DARK,

  MAIN_TEXT_COLOR = DefaultColors.WHITE,
  MAIN_ICON_COLOR = DefaultColors.EXTRADARK_GRAY,

  MAIN_DESC_COLOR = DefaultColors.GREEN_LIGHT,

  PRIMARY_BUTTON_TEXT_COLOR = DefaultColors.EXTRADARK_GRAY,
  PRIMARY_BUTTON_TEXT_DISABLED_COLOR = DefaultColors.WHITE_40,

  POPOVER_BORDER_COLOR = DefaultColors.ARSENIC,

  FOOTER_LINK_COLOR = DefaultColors.WHITE,

  HEADER_BG_COLOR = DefaultColors.EERIE_BLACK,

  RADIO_BORDER_COLOR = DefaultColors.ARSENIC,

  FILTER_BORDER_COLOR = DefaultColors.SPANISH_GRAY,

  DROPDOWN_BG_COLOR = DefaultColors.CHINESE_BLACK,

  ERROR_BORDER_COLOR = DefaultColors.LIGHT_CARMINE_PINK,

  DIVIDER_COLOR = DefaultColors.WHITE_10,

  OVERLAY_COLOR = DefaultColors.BLACK_20,
  SELECT_OVERLAY_COLOR = DefaultColors.BATTERY_CHARGED_BLUE_EXTRADARK,

  FILLED_INPUT_BG_COLOR = DefaultColors.CHINESE_BLACK,

  HAV_LINK_BORDER_COLOR = DefaultColors.GREEN_MEDIUM,

  TABLE_COLUMN_DISABLED_COLOR = DefaultColors.LIGHT_SILVER_3,
  TABLE_HEADER_DISABLED_COLOR = DefaultColors.BLACK_5,
  TABLE_HEADER_BORDER_COLOR = DefaultColors.EXTRADARK_GRAY,
  TABLE_ROW_COLOR = DefaultColors.BLACK_5,
  TABLE_SELECTED_ROW_COLOR = DefaultColors.BATTERY_CHARGED_BLUE_DARK,
  TABLE_SUMMARY_COLOR = DefaultColors.GREEN_MEDIUM_20,
  TABLE_HOVER_ROW = DefaultColors.EXTRADARK_GRAY,

  TAB_BG_COLOR = DefaultColors.BLACK_60,
  TAB_TEXT_COLOR = DefaultColors.SPANISH_GRAY,

  CHART_DIVIDE_LINE_COLOR = DefaultColors.ARSENIC,
  CHART_DIVIDE_LINE_COLOR_2 = DefaultColors.WHITE_4,

  SCROLL_TRACK_COLOR = DefaultColors.WHITE_40,
  SCROLL_THUMB_COLOR = DefaultColors.DIAMOND,
  SCROLL_THUMB_ACTIVE_COLOR = DefaultColors.GREEN_MEDIUM_50,
  SCROLL_THUMB_HOVER_COLOR = DefaultColors.GREEN_MEDIUM_50,
}

export enum LightColors {
  PRIMARY_COLOR = DefaultColors.GREEN_MEDIUM,

  MAIN_BG_COLOR = DefaultColors.CULTURED,
  MAIN_BG_COLOR_2 = DefaultColors.WHITE,
  MAIN_BG_COLOR_3 = DefaultColors.BRIGHT_GRAY,
  YELLOW_BG_COLOR = DefaultColors.YELLOW_LIGHT,
  RED_BG_COLOR = DefaultColors.RED_LIGHT,
  GREEN_BG_COLOR = DefaultColors.GREEN_LIGHT,
  ORANGE_BG_COLOR = DefaultColors.ORANGE_LIGHT,
  BLUE_BG_COLOR = DefaultColors.BLUE_LIGHT,
  CRIMSON_BG_COLOR = DefaultColors.CRIMSON_LIGHT,
  PURPLE_BG_COLOR = DefaultColors.PURPLE_LIGHT,

  MAIN_TEXT_COLOR = DefaultColors.EXTRADARK_GRAY,
  MAIN_ICON_COLOR = DefaultColors.WHITE,

  MAIN_DESC_COLOR = DefaultColors.GREEN_LIGHT,

  PRIMARY_BUTTON_TEXT_COLOR = DefaultColors.WHITE,
  PRIMARY_BUTTON_TEXT_DISABLED_COLOR = DefaultColors.SPANISH_GRAY,

  POPOVER_BORDER_COLOR = DefaultColors.WHITE,

  FOOTER_LINK_COLOR = DefaultColors.DARK_GRAY_50,

  HEADER_BG_COLOR = DefaultColors.GREEN_MEDIUM,

  RADIO_BORDER_COLOR = DefaultColors.LIGHT_SILVER,

  FILTER_BORDER_COLOR = DefaultColors.LIGHT_SILVER,

  DROPDOWN_BG_COLOR = DefaultColors.WHITE,

  ERROR_BORDER_COLOR = DefaultColors.VENETIAN_RED,

  DIVIDER_COLOR = DefaultColors.BRIGHT_GRAY,

  OVERLAY_COLOR = DefaultColors.BLACK_5,
  SELECT_OVERLAY_COLOR = DefaultColors.DIAMOND_DARK,

  FILLED_INPUT_BG_COLOR = DefaultColors.WHITE,

  HAV_LINK_BORDER_COLOR = DefaultColors.WHITE,

  TABLE_COLUMN_DISABLED_COLOR = DefaultColors.BLACK_3,
  TABLE_HEADER_DISABLED_COLOR = DefaultColors.BLACK_5,
  TABLE_HEADER_BORDER_COLOR = DefaultColors.LIGHT_SILVER,
  TABLE_ROW_COLOR = DefaultColors.BRIGHT_GRAY,
  TABLE_SELECTED_ROW_COLOR = DefaultColors.DIAMOND,
  TABLE_SUMMARY_COLOR = DefaultColors.GREEN_MEDIUM_20,
  TABLE_HOVER_ROW = DefaultColors.LIGHT_GRAY,

  TAB_BG_COLOR = DefaultColors.LIGHT_SILVER,
  TAB_TEXT_COLOR = DefaultColors.BLACK_60,

  CHART_DIVIDE_LINE_COLOR = DefaultColors.BRIGHT_GRAY,
  CHART_DIVIDE_LINE_COLOR_2 = DefaultColors.BLACK_4,

  SCROLL_TRACK_COLOR = DefaultColors.WHITE_40,
  SCROLL_THUMB_COLOR = DefaultColors.DIAMOND,
  SCROLL_THUMB_ACTIVE_COLOR = DefaultColors.GREEN_MEDIUM_50,
  SCROLL_THUMB_HOVER_COLOR = DefaultColors.GREEN_MEDIUM_50,
}

const ThemeTokenCommon = {
  fontFamily: "'Nunito', sans-serif",
};

export const ThemeTokenLight = {
  colorPrimary: DefaultColors.GREEN_MEDIUM,
  colorLink: DefaultColors.GREEN_MEDIUM,
  colorLinkHover: DefaultColors.GREEN_MEDIUM_50,
  colorLinkActive: DefaultColors.GREEN_MEDIUM_50,
  colorBgElevated: DefaultColors.WHITE,
  labelRequiredMarkColor: DefaultColors.RED_WINE,
  labelColor: DefaultColors.GREEN_LIGHT,
  colorError: DefaultColors.RED_WINE,
  colorBorder: 'transparent',
  colorBgContainer: 'rgb(223 233 220)',
  activeBg: 'rgb(223 233 220)',
  hoverBg: 'rgb(223 233 220)',

  ...ThemeTokenCommon,
};

export const ThemeTokenDark = {
  colorPrimary: DefaultColors.GREEN_MEDIUM,
  colorLink: DefaultColors.GREEN_MEDIUM,
  colorLinkHover: DefaultColors.GREEN_MEDIUM_50,
  colorLinkActive: DefaultColors.GREEN_MEDIUM_50,
  colorBgElevated: DefaultColors.CHINESE_BLACK,
  labelRequiredMarkColor: DefaultColors.RED_WINE,
  labelColor: DefaultColors.GREEN_LIGHT,
  colorError: DefaultColors.RED_WINE,
  colorBorder: 'transparent',
  colorBgContainer: 'rgb(223 233 220)',
  activeBg: 'rgb(223 233 220)',
  hoverBg: 'rgb(223 233 220)',

  ...ThemeTokenCommon,
};
