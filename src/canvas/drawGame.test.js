import drawGame from './drawGame';
import getInitialGame from '../ai/getInitialGame';
import move from '../ai/move';
import gameTheme from './gameTheme';
import ctx from '../__mocks__/ctxMock';
import raf from '../__mocks__/rafMock';

describe('drawGame', () => {
  it('initial game', () => {
    const game = getInitialGame();
    drawGame(gameTheme, ctx, raf)(game);
  });

  it('X__ ___ ___', () => {
    const game = move(getInitialGame(), 0);
    drawGame(gameTheme, ctx, raf)(game);
  });
});
