import { getLineFrames } from './getLineFrames';
import { unnest, pipe, map } from 'ramda';
import { addDelay } from './addDelay';

/**
 * get lines chunks and delay to draw by frame
 * @param {*} theme {percentageByFrame, delayAfterEachLine}
 * @return {Function} (size) => [[Number]] line chunks
 */
const getLinesFrames = (theme) => pipe(
  map(getLineFrames(theme.percentageByFrame)),
  map(addDelay(theme.delayAfterEachLine)),
  unnest
);

export {
  getLinesFrames
};
