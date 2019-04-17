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

const light = {
  bg: colors.white,
  float: colors.white,
  accent: colors.black,
};

const dark = {
  bg: colors.black,
  accent: colors.white,
};

const theme = {
  light,
  dark,
  colors,
  width: `760px`,
  maxWidth: `100%`,
  baseFontSize: `10px`,
};

export default theme;
