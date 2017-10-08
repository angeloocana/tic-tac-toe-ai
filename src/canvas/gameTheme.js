import theme from '../themes/theme';

const gameTheme = {
  positions: {
    x: {
      lineColor: theme.colors.white,
      lineWidth: 4,
      percentageByFrame: 15,
      delayAfterEachLine: 10
    },
    o: {
      lineColor: theme.colors.white,
      lineWidth: 4,
      percentageByFrame: 5
    }
  },
  boardLines: {
    lineColor: theme.colors.white,
    lineWidth: 2,
    percentageByFrame: 10,
    delayAfterEachLine: 10
  },
  winLine: {
    lineColor: theme.colors.green,
    lineWidth: 8,
    percentageByFrame: 10,
    delayAfterEachLine: 10
  }
};

export default gameTheme;
