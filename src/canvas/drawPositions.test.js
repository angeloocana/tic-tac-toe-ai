import drawPositions from './drawPositions';
import getInitialGame from '../ai/getInitialGame';
import gameTheme from './gameTheme';
import ctx from '../__mocks__/ctxMock';

describe('drawPositions', () => {
  it('initial game', () => {    
    const game = getInitialGame();
    drawPositions(gameTheme, ctx)(game);
  });
});
