const colors = {
  blue: '#067df7',
  red: '#FF6B64',
  yellow: '#FFC23C',
  green: '#36CD4E',
  white: `white`,
  black: `#222`,
  // palette
  porcelain: '#F2F3F4',
  sienna: '#D09056',
  gray: '#90969A',
  carmine: '#B6433B',
  brightGray: '#333A43',
  dark: '#1e2125',
  // info
  success: '#60a866', // Aqua Forest
  danger: '#f44336', // Pomegranate
};

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
  maxContent: `770px`,
  breakToFullScreen: `800px`,
};

const light = {
  wrap: colors.brightGray,
  bg: colors.white,
  toggle: colors.dark,
  badges: colors.dark,
  text: colors.dark,
  accent: colors.carmine,
  palette: colors,
  width: sizes.maxContent,
  breakToFullScreen: sizes.breakToFullScreen,
  maxWidth: `100%`,
};

const dark = {
  wrap: colors.brightGray,
  bg: colors.dark,
  toggle: colors.brightGray,
  badges: colors.gray,
  text: colors.white,
  accent: colors.carmine,
  palette: colors,
  width: sizes.maxContent,
  breakToFullScreen: sizes.breakToFullScreen,
  maxWidth: `100%`,
};

const theme = {
  light,
  dark,
  colors,
  width: `768px`,
  maxWidth: `100%`,
  baseFontSize: `10px`,
  sizes,
};

export default theme;
