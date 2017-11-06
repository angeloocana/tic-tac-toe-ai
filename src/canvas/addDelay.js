import { range, concat, map } from 'ramda';

/**
 * Get list of nulls
 * @sig Number -> [Null]
 * @param {Number} nFrames number of frames
 * @return {[null]} array of nulls
 */
const getNulls = (nFrames) => map(_ => null, range(0, nFrames));

/**
 * Add nFrames delay to the end of each line
 * @sig Number -> [a] -> [a]
 * @param {Number} nFrames number of frames
 * @param {[*]} frames list of frames
 * @return {[*]} list of frames + delay (nulls)
 */
const addDelay = (nFrames, frames) => concat(frames || [], getNulls(nFrames));

export default addDelay;
