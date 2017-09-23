/**
 * Round x with n decimal.
 * @param {Number} x Number to be rounded.
 * @param {Number} n Number of digits after semi column.
 * @returns {Number} Number rounded.
 */
const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);

const scaleN = (n) => round(Math.pow(1.2, n), 3);

const scale = n => `${scaleN(n)}rem`;

const colors = {
  white: '#D3D0CB',
  black: '#1E2019', // #393E41
  yellow: '#E2C044',
  red: '#FF0000',
  darkBlue: '#587B7F',
  blue: '#85B9BF',
  green: '#9FE80C',
  gray: '#393E41',

  blackShades: [
    '#32342D'
  ]
};

const fontFamily = '"Cambo", serif';

const theme = {
  scale,
  scaleN,
  colors,
  fontFamily,
  color: colors.white,
  bg: colors.black,
  padding: `0 ${scaleN(1)}rem ${scaleN(10)}rem ${scaleN(0)}rem`,
  margin: '0 auto',
  maxWidth: '60rem',
  borderRadius: '0.2rem',
  lineHeight: 1.5,
  focus: {
    border: '0.4rem red solid'
  },
  p: {
    fontSize: scale(1),
    lineHeight: scaleN(2),
    firstLetter: {
      fontSize: `${(scaleN(1) * 2) + scaleN(2)}rem`,
      color: colors.yellow,
      lineHeight: 0.2,
      padding: '1.3rem 0.1rem',
      margin: 0
    }
  },
  a: {
    fontFamily,
    color: colors.white,
    textDecoration: 'none',
    hover: {
      color: colors.yellow
    }
  },
  header: {
    title: {
      fontSize: scale(3),
      textAlign: 'left',
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0)
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1)
    },
    isHome: {
      title: {
        fontSize: scale(4),
        textAlign: 'center',
        padding: `${scale(2)} 0 0 0`,
        margin: `${scale(0)} 0 ${scale(4)} 0`,
        lineHeight: scaleN(0)
      },
      subTitle: {
        fontSize: `${scale(0)}`,
        padding: `${scale(-4)} 0 0 0`,
        margin: `0`,
        lineHeight: scaleN(-1)
      }
    }
  },
  menu: {
    padding: scale(2),
    opened: {
      bg: colors.blackShades[0]
    },
    closed: {
      bg: 'transparent'
    },
    label: {
      width: scale(3),
      height: scale(3),
      fontSize: scale(3.2)
    },
    a: {
      fontSize: scale(1),
      paddingBottom: scale(1),
      textAlign: 'left',
      color: colors.white,
      active: {
        color: colors.yellow
      }
    },
    ul: {
      marginTop: scale(6),
      marginLeft: scale(7.8)
    }
  },
  h1: {
    fontSize: scale(6),
    padding: `${scale(1)} 0 0 0`,
    margin: `${scale(4)} 0 0 0`,
    textAlign: 'center'
  },
  h2: {
    fontSize: scale(4),
    padding: `${scale(1)} 0 0 0`,
    margin: `${scale(4)} 0 0 0`,
    textAlign: 'center'
  },
  i18n: {
    selectLanguage: {
      li: {
        margin: `-${scale(0)} 0 0 0`,
        padding: `${scale(5)} ${scale(-2)} ${scale(-5)} ${scale(-2)}`,
        fontSize: scale(3),
        borderRadius: '0.2rem',
        selected: {
          backgroundColor: colors.gray
        }
      }
    }
  }
};

export default theme;
