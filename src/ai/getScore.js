import {
  xValue,
  oValue,

  winValue,
  loseValue,

  initialScore
} from './constants';

const getScoreByPositionsInBoard = (b) => (i0, i1, i2) => {
  if (b[i0] !== 0 && b[i0] === b[i1] && b[i1] === b[i2]) {
    return {
      x: b[i0] === xValue ? winValue : loseValue,
      o: b[i0] === oValue ? winValue : loseValue
    };
  }
  else return null;
};

const positionToCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

/**
 * get Score
 * @param {*} board board 0 -> 8 x=1 o=-1
 * @return {{x: {Number}, o: {Number}}} score obj -1 lose, 1 win
 */
const getScore = (board) => {
  const getScoreByPositions = getScoreByPositionsInBoard(board);

  let score = initialScore;

  positionToCheck.forEach(positions => {
    const newScore = getScoreByPositions(positions[0], positions[1], positions[2]);
    if (newScore && newScore.x !== 0 && newScore.o !== 0) {
      score = newScore;
    }
  });

  return score;
};

const getMyScore = (board, value) => {
  const score = getScore(board);
  return value === xValue ? score.x : score.o;
};

export {
  getScore,
  getMyScore
};
