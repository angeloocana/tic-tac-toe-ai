import addDelay from './addDelay';
import getLineFrames from './getLineFrames';
import { unnest, pipe, map, partial } from 'ramda';

/**
 * get lines chunks and delay to draw by frame
 * @param {*} theme {percentageByFrame, delayAfterEachLine}
 * @return {Function} (size) => [[Number]] line chunks
 */
const getLinesFrames = (theme) => pipe(
  map(partial(getLineFrames, [theme.percentageByFrame])),
  map(partial(addDelay, [theme.delayAfterEachLine])),
  unnest
);

export default getLinesFrames;
